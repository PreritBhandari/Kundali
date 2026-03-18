export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, system, apiKey } = req.body;

  if (!apiKey || !apiKey.startsWith("sk-")) {
    return res.status(400).json({ error: "Invalid or missing API key" });
  }

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: system || "You are a helpful assistant.",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || `Anthropic API error: ${response.status}`,
      });
    }

    const text = data.content?.map((c) => c.text || "").join("") || "";
    return res.status(200).json({ text });
  } catch (err) {
    console.error("AI proxy error:", err);
    return res.status(500).json({ error: "Server error: " + err.message });
  }
}