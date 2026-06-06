import { spawn } from "node:child_process";
import assert from "node:assert/strict";
import process from "node:process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const HOST = "127.0.0.1";
const PORT = 4173;
const BASE_URL = `http://${HOST}:${PORT}`;

async function waitForServer(url, attempts = 30) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is not ready yet.
    }
    await delay(300);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startServer() {
  const server = spawn("python3", ["-m", "http.server", String(PORT), "--bind", HOST], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"]
  });

  server.stdout.on("data", () => {});
  server.stderr.on("data", () => {});

  return server;
}

async function expectVisible(locator, message) {
  await locator.waitFor({ state: "visible", timeout: 8000 });
  console.log(`PASS: ${message}`);
}

async function main() {
  const server = startServer();
  let browser;

  try {
    await waitForServer(BASE_URL);

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
    await page.goto(BASE_URL, { waitUntil: "load" });

    await expectVisible(page.getByText("LEGENDARY CLUB OWNER", { exact: true }), "brand renders");
    await expectVisible(page.getByText("Mobile Game", { exact: true }), "mobile badge renders");
    await expectVisible(page.getByRole("heading", { name: "YOU'RE THE MANAGER NOW." }), "hero headline renders");

    await expectVisible(page.locator('img[alt="Manager screen from the game"]'), "hero manager mockup image renders");
    await expectVisible(page.locator('img[alt="Build screen from the game"]'), "build mockup image renders");
    await expectVisible(page.locator('img[alt="Scout screen from the game"]'), "scout mockup image renders");
    await expectVisible(page.locator('img[alt="Compete screen from the game"]'), "compete mockup image renders");

    await expectVisible(page.getByRole("heading", { name: "BUILD YOUR CLUB" }), "build step heading renders");
    await expectVisible(page.getByRole("heading", { name: "SCOUT & ASSEMBLE" }), "scout step heading renders");
    await expectVisible(page.getByRole("heading", { name: "COMPETE & WIN" }), "compete step heading renders");

    const quizPrompts = [
      "Your star striker is injured before a big match. You...",
      "You have budget for one signing. You pick...",
      "Your league season starts in a week. You spend your prep time...",
      "When you're losing at half time, you..."
    ];

    for (const prompt of quizPrompts) {
      await expectVisible(page.getByText(prompt, { exact: true }), `quiz prompt visible: ${prompt}`);
      await page.locator(".answer").first().click();
    }

    await expectVisible(page.getByRole("heading", { name: "THE TACTICIAN 🧠" }), "quiz result appears");
    await expectVisible(
      page.getByText("Ready to play as The Tactician? The app is coming soon.", { exact: true }),
      "quiz result follow-up copy appears"
    );

    const resultBadges = page.locator(".result-actions .store-badge");
    assert.equal(await resultBadges.count(), 2, "Expected 2 store badges in the quiz result");
    console.log("PASS: quiz result store badges render");

    await page.getByText("↩ TAKE QUIZ AGAIN", { exact: true }).click();
    await expectVisible(page.getByText(quizPrompts[0], { exact: true }), "quiz can restart after result");

    console.log("");
    console.log("Landing page smoke test passed.");
  } finally {
    if (browser) {
      await browser.close();
    }

    server.kill("SIGTERM");
    await delay(200);

    if (server.exitCode === null) {
      server.kill("SIGKILL");
    }
  }
}

main().catch((error) => {
  console.error("");
  console.error("Landing page smoke test failed.");
  console.error(error);
  process.exitCode = 1;
});
