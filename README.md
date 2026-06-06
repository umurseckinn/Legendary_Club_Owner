# Legendary Club Owner Landing Page

Static landing page for the international launch of Legendary Club Owner.

## Project Structure

- `index.html` — full page with inline HTML, CSS, and JavaScript
- `package.json` — Node metadata and the Playwright test command
- `images/manager.png` — hero phone screen
- `images/build.png` — build step phone screen
- `images/scout.png` — scout step phone screen
- `images/compete.png` — compete step phone screen
- `scripts/verify-landing-page.mjs` — Playwright smoke test
- `scripts/README.md` — Playwright usage notes

## Screen Mapping

- Hero phone mockup → `images/manager.png`
- `BUILD YOUR CLUB` mockup → `images/build.png`
- `SCOUT & ASSEMBLE` mockup → `images/scout.png`
- `COMPETE & WIN` mockup → `images/compete.png`

## Run

Open `index.html` directly in a browser, or serve the folder with any static file server.

For example:

```bash
python3 -m http.server 8008 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8008`.

## Vercel Deploy

This project is ready to deploy to Vercel as a static site.

Recommended Vercel settings:

- Framework Preset: `Other`
- Root Directory: `.`
- Build Command: leave empty
- Output Directory: leave empty

Included deploy helpers:

- `vercel.json` — static deploy behavior and cache headers
- `.vercelignore` — keeps local test/docs files out of the deploy upload

After import, Vercel can serve the project directly from the repository root.

## Automation / Testing

The repo includes a Playwright smoke test that verifies:

- the hero renders
- the mobile badge renders
- the manager/build/scout/compete phone screens render
- the quiz can be completed end to end
- the final quiz result appears
- the quiz can be restarted

Run it with:

```bash
npm install
npx playwright install chromium
npm run test:landing
```

For more detail, see `scripts/README.md`.

## Notes

- Mobile-first responsive layout
- No framework or build step required
- Quiz and email interaction run fully in the browser with no backend
- All gameplay screenshots are presented inside mock iPhone frames
