# जन्म कुण्डली — Nepali Vedic Kundli

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



## Accuracy

| Body | Method | Accuracy |
|------|--------|----------|
| Sun | VSOP87 + equation of center | ~1 arcsecond |
| Moon | 60-term Meeus Table 47.A | ~10 arcseconds |
| Mars/Jupiter/Saturn | Multi-term VSOP87 | ~1 arcminute |
| Rahu/Ketu | True lunar node | ~30 arcseconds |
| Lagna | GMST + true obliquity | ~1 arcminute |
