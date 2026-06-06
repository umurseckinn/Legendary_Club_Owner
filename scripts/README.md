# Landing Page Playwright Smoke Test

## What it tests

This smoke test opens the live landing page in a browser and verifies:

- the hero section renders
- the mobile badge and phone mockups are visible
- the hero `manager.png` screen loads
- the `build.png`, `scout.png`, and `compete.png` screens load
- the `Build`, `Scout`, and `Compete` step screens load
- the quiz can be completed end to end
- the final quiz result appears
- the quiz can be restarted

## How to run

From the project root:

```bash
npm install
npx playwright install chromium
npm run test:landing
```

The script starts a local static server automatically, opens the page with Playwright, runs the checks, and exits with a non-zero code if any check fails.
