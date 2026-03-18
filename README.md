# जन्म कुण्डली — Nepali Vedic Kundli

A full-featured Vedic astrology app with accurate birth charts, Vimshottari Dasha, Panchang, and AI analysis.

## Deploy to Vercel (FREE — 3 minutes)

### Option A — Deploy via GitHub (Recommended)

1. **Create a GitHub repo**
   - Go to https://github.com/new
   - Name it `nepali-kundli`, set to Public, click **Create repository**

2. **Upload the files**
   - Click **uploading an existing file**
   - Drag the entire `kundli-app` folder contents (all files inside, not the folder itself)
   - Commit changes

3. **Deploy on Vercel**
   - Go to https://vercel.com → Sign up free with GitHub
   - Click **Add New → Project**
   - Import your `nepali-kundli` repo
   - Vercel auto-detects Vite — just click **Deploy**
   - Your app is live at `https://nepali-kundli.vercel.app` in ~60 seconds ✓

---

### Option B — Deploy via Vercel CLI (No GitHub needed)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Go into the project folder
cd kundli-app

# 3. Install dependencies
npm install

# 4. Deploy
vercel

# Follow prompts — your app is live instantly
```

---

### Option C — Deploy to Netlify (Alternative)

1. Go to https://netlify.com → Sign up free
2. Drag & drop the `kundli-app` **folder** onto the Netlify dashboard
3. Wait 30 seconds → Live! ✓

---

## Run Locally

```bash
cd kundli-app
npm install
npm run dev
# Open http://localhost:5173
```

## Project Structure

```
kundli-app/
├── index.html          # Entry HTML
├── package.json        # Dependencies (React 18 + Vite)
├── vite.config.js      # Build config
├── vercel.json         # Vercel deployment config
└── src/
    ├── main.jsx        # React root
    └── App.jsx         # Full app (1600+ lines)
                        # — High-accuracy Vedic engine (Jean Meeus algorithms)
                        # — North & South Indian charts (SVG)
                        # — Vimshottari Dasha with Antardashas
                        # — Panchang (Tithi, Nakshatra, Yoga, Karana)
                        # — AI Analysis (Anthropic Claude API)
                        # — Dark/Light mode, Nepali/English toggle
                        # — City autocomplete (65+ cities)
```

## Tech Stack

- **React 18** + **Vite 5**
- **Pure JavaScript** astronomy engine (no external astrology library needed)
- **Jean Meeus algorithms** — 60-term Moon series, full Sun equation of center
- **Lahiri Ayanamsa** — official Indian standard
- **Anthropic Claude API** — for AI interpretations
- Zero backend required — runs 100% in the browser

## Accuracy

| Body | Method | Accuracy |
|------|--------|----------|
| Sun | VSOP87 + equation of center | ~1 arcsecond |
| Moon | 60-term Meeus Table 47.A | ~10 arcseconds |
| Mars/Jupiter/Saturn | Multi-term VSOP87 | ~1 arcminute |
| Rahu/Ketu | True lunar node | ~30 arcseconds |
| Lagna | GMST + true obliquity | ~1 arcminute |
