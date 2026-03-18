export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.FREE_ASTROLOGY_API_KEY;

  try {
    const response = await fetch(
      "https://json.freeastrologyapi.com/planets/extended",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          ...req.body,
          settings: {
            observation_point: "topocentric",
            ayanamsha: "lahiri",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}