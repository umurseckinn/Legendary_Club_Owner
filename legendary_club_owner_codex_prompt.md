# Legendary Club Owner — Landing Page
## Master Prompt for Codex AI

---

## CONTEXT (Read before generating any code)

You are building a **landing page** for a mobile football management game called **Legendary Club Owner** (originally "Efsane Başkan" in Turkey), developed by No Surrender Studio. The page is being built for its **international launch**, targeting **English-speaking audiences**.

**Target persona — write every line of code for this person:**
> Alex, 24, London. Casual mobile gamer (plays FIFA Mobile). Football fan. Has never heard of this game. He's scrolling his feed and lands on this page. You have **5 seconds** to stop him.

**Game's core USP (use these as copy pillars throughout):**
1. **Skill-based, zero luck** — no random draws, no gambling
2. **Free to play, not pay-to-win** — only cosmetic purchases
3. **Real cash rewards** — ranked players earn real money every season
4. **Real match data** — 90-minute simulations using actual football stats

---

## TECH STACK & CONSTRAINTS

- **Pure HTML + CSS + Vanilla JavaScript** — single `index.html` file
- **No frameworks, no build tools** — must run by just opening the file or deploying static
- **Mobile-first, fully responsive** (breakpoints: 375px, 768px, 1280px)
- **Google Fonts** allowed (import via `<link>`)
- **No external JS libraries** except optionally: GSAP via CDN for scroll animations
- Must pass basic **accessibility** checks (alt tags, contrast, semantic HTML)

---

## VISUAL DESIGN DIRECTION

**Aesthetic:** Dark, premium, athletic — think "Champions League x mobile app store". NOT generic. NOT purple gradients on white.

**Color palette:**
```css
--color-bg: #0a0c0f;
--color-surface: #111418;
--color-card: #161b22;
--color-primary: #00e676;      /* electric green — main CTA, accents */
--color-primary-dim: #00c853;
--color-gold: #ffc107;          /* rewards / leaderboard accents */
--color-text: #f0f4f8;
--color-text-muted: #8899aa;
--color-border: rgba(255,255,255,0.07);
```

**Typography:**
```html
<!-- In <head> -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
- **Headings:** `Bebas Neue` — large, bold, athletic
- **Body:** `Inter` — clean, readable

**Motion:**
- Subtle fade-in on scroll (IntersectionObserver)
- CTA button: pulse glow animation on hover
- Leaderboard rows: staggered slide-in

---

## PAGE STRUCTURE (build in this exact order)

### 1. NAVBAR (sticky, minimal)
```
[⚽ LEGENDARY CLUB OWNER]                    [▶ PLAY FREE]
```
- Logo left (emoji + text), single CTA button right
- Background: `rgba(10,12,15,0.95)` with `backdrop-filter: blur(12px)`
- On mobile: logo only + hamburger-free single CTA

---

### 2. HERO SECTION

**Layout:** Full viewport height. Dark background. Center-aligned text. AI-generated hero image as background (blurred/overlaid). 

**Copy (use exactly):**
```
[EYEBROW SMALL TEXT]  No Luck. No Pay-to-Win. No Excuses.

[H1 — HUGE, Bebas Neue]
YOU'RE THE
MANAGER NOW.

[SUBHEADLINE — Inter 500]
Build your club. Scout your squad. Outsmart every rival.
Legendary Club Owner rewards the best manager — not the biggest spender.

[CTA BUTTON — electric green, large]
▶  PLAY FREE — COMING SOON
```

**Visual treatment:**
- Hero background: `<img>` tag with `id="hero-bg"` pointing to `./images/hero.jpg` (the AI-generated image)
- Overlay: `linear-gradient(to bottom, rgba(10,12,15,0.5) 0%, rgba(10,12,15,0.85) 60%, #0a0c0f 100%)`
- Subtle noise texture via CSS `background-image: url("data:image/svg+xml,...")` layered on top
- On scroll down: hero image parallax (`transform: translateY()` via JS)

---

### 3. USP STRIP (4 pillars, horizontal scroll on mobile)

4 cards in a row. Each card:
```
[ICON — emoji or SVG]
[SHORT TITLE]
[ONE-LINE DESCRIPTION]
```

Content:
| Icon | Title | Description |
|------|-------|-------------|
| 🧠 | Skill Wins Here | Every result comes from your decisions — tactics, transfers, training. Zero randomness. |
| 💰 | Free. Always. | No pay-to-win. Purchases are cosmetic only. Your brain is your advantage. |
| 🏆 | Real Cash Prizes | Top seasonal rankings earn real money. Every leaderboard position pays out. |
| ⚽ | Real Match Data | Our engine simulates full 90-minute matches using actual football performance data. |

Card style:
- Background: `--color-card` with `1px solid var(--color-border)`
- Left accent: `3px solid var(--color-primary)` border-left
- On hover: lift + glow effect

---

### 4. HOW IT WORKS (3-step vertical flow)

Section title: `HOW YOU BUILD A LEGEND`

3 steps with large step numbers:

```
01  BUILD YOUR CLUB
    Design your stadium, grow your infrastructure, attract sponsorships and build a scouting network from the ground up.

02  SCOUT & ASSEMBLE
    Collect player cards, evaluate real stats, and put together the squad that fits YOUR tactical vision.

03  COMPETE & WIN
    Enter weekly leagues against real managers worldwide. Results are decided by your tactics — not your wallet.
```

Design: Large step numbers in `Bebas Neue`, dimmed (`opacity: 0.15`, `font-size: 120px`). Step text overlaid on top. Connected by a vertical line.

---

### 5. INTERACTIVE ELEMENT — "WHAT KIND OF MANAGER ARE YOU?" QUIZ

This is the **most important interactive element**. Build it as a self-contained quiz widget inside the page.

**Container:** Centered card, max-width 680px, `--color-card` background.

**Quiz Flow (4 questions → result):**

**Question 1:**
> "Your star striker is injured before a big match. You..."
- A) Play a false 9 and adjust the whole system 🧠
- B) Buy a replacement immediately — budget be damned 💸
- C) Promote a youngster from your academy 🌱
- D) Shift to a defensive setup and grind the result 🔒

**Question 2:**
> "You have budget for one signing. You pick..."
- A) A versatile midfielder who fits multiple systems
- B) The highest-rated card available, no questions asked
- C) A young talent with massive development potential
- D) A proven defensive anchor to shore up the backline

**Question 3:**
> "Your league season starts in a week. You spend your prep time..."
- A) Fine-tuning your formation and pressing triggers
- B) Scouting the market for last-minute deals
- C) Upgrading your training facilities
- D) Studying your opponents' tendencies

**Question 4:**
> "When you're losing at half time, you..."
- A) Make tactical adjustments — shape, press, tempo
- B) Throw money at the problem in the next transfer window
- C) Trust the process and keep developing your project
- D) Tighten up, absorb pressure and hit on the counter

**Scoring logic:**
- Mostly A → **The Tactician** 🧠
- Mostly B → **The Dealmaker** 💼
- Mostly C → **The Visionary** 🌱
- Mostly D → **The Iron Wall** 🛡️

**Result cards (one per type):**

```
THE TACTICIAN 🧠
"You see football as a chess match. You dissect systems, exploit weaknesses, and always have a Plan B. Legendary Club Owner was made for you."
Strength: Formation mastery | Style: Calculated

THE DEALMAKER 💼
"You live for transfer deadline day. When you see the right player, you move fast. Your squad is always stacked — and you know it."
Strength: Squad depth | Style: Aggressive

THE VISIONARY 🌱
"You play the long game. Youth, infrastructure, patience — you're building something that lasts. Rival managers won't know what hit them in three seasons."
Strength: Club development | Style: Methodical

THE IRON WALL 🛡️
"You win by not losing. Your defensive organization is airtight, your game plans are meticulous, and your opponents hate playing against you."
Strength: Defensive solidity | Style: Disciplined
```

**After result is shown:**
- Display result card with icon, title, description
- Show: `[▶ PLAY AS THE TACTICIAN — COMING SOON]` button (dynamic, uses result name)
- Show: `[↩ TAKE QUIZ AGAIN]` text link

**JS Implementation notes:**
- Store answers in array, tally at end
- Animate question transitions: fade out → fade in (CSS transition)
- Progress bar at top of quiz card (step 1/4, 2/4...)
- NO page reload — all state in memory

---

### 6. LEADERBOARD MOCKUP (Season Preview)

Section title: `WHAT A SEASON LOOKS LIKE`
Subtitle: `These are the managers who competed last season in Turkey. This is what you're joining.`

Render a **fake but realistic leaderboard table**:

| Rank | Manager | Club | W | D | L | Pts | Prize |
|------|---------|------|---|---|---|-----|-------|
| 🥇 1 | KingSalah99 | Anatolian FC | 18 | 2 | 0 | 56 | £500 |
| 🥈 2 | TacticsMaster | Golden Eagles | 16 | 3 | 1 | 51 | £250 |
| 🥉 3 | IronDefense | Bosphorus United | 15 | 4 | 1 | 49 | £100 |
| 4 | TheBuilder | Marble City FC | 14 | 3 | 3 | 45 | £50 |
| 5 | NightPress | Crimson Wolves | 13 | 4 | 3 | 43 | £30 |
| ... | ... | ... | | | | | |
| 🟡 YOUR RANK | **[YOU]** | Your Club | — | — | — | — | ? |

**Design details:**
- Top 3 rows: gold/silver/bronze left accent
- YOUR RANK row: highlighted with `--color-primary` glow, `You could be here` tooltip
- Animate rows sliding in on scroll (staggered, 80ms delay each)
- Below table: `"Every manager on the leaderboard earns a reward. No season is wasted."` italic caption

---

### 7. SOCIAL PROOF / TRUST SECTION

3 quote-style cards (fake but plausible):

```
"Finally a football game where skill actually matters."
— @FM_Addict_UK, Beta Tester

"I've played every football manager game out there. This hits differently."
— @GabrielTactics, Discord Community

"The fact that there's no pay-to-win makes it immediately more interesting than anything on the market."
— @MobileGamingWeekly (fictional reviewer)
```

Style: Minimal, dark cards, left `"` quotation mark in electric green, large.

---

### 8. FINAL CTA SECTION

Full-width section, slightly lighter background (`--color-surface`).

```
[H2 — Bebas Neue]
YOUR CLUB.
YOUR RULES.
YOUR SEASON.

[BODY]
Legendary Club Owner is coming soon to international markets.
Be first in line — no spam, just a launch notification.

[EMAIL INPUT + BUTTON]
[  your@email.com                    ] [ NOTIFY ME ]

[SMALL PRINT]
Free to play. No credit card. No pay-to-win. Ever.
```

Email input: store nothing, just show a success message on submit:
```
✅ You're on the list. We'll see you on the pitch.
```

---

### 9. FOOTER

```
© 2026 No Surrender Studio  |  Legendary Club Owner
[Twitter/X icon]  [Instagram icon]  [Discord icon]

"The best manager wins. Always."
```

Minimal, dark, centered. Icons as SVG inline or unicode approximations.

---

## SCROLL ANIMATIONS

Use `IntersectionObserver` to add `.visible` class when elements enter viewport.

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply `.reveal` to: USP cards, how-it-works steps, leaderboard rows, quote cards.

Stagger delays with inline style: `style="transition-delay: 0.1s"`, `0.2s`, etc.

---

## FILE STRUCTURE

```
/
├── index.html          ← everything (HTML + <style> + <script> all inline)
├── images/
│   ├── hero.jpg        ← AI-generated hero image (see image prompts doc)
│   └── og-image.jpg    ← optional Open Graph preview image
└── README.md
```

---

## META / SEO TAGS (include in `<head>`)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Legendary Club Owner — Build. Scout. Win.</title>
<meta name="description" content="The mobile football management game where skill wins. Build your club, scout your squad, compete in real leagues and earn real rewards. No pay-to-win. Ever.">
<meta property="og:title" content="Legendary Club Owner">
<meta property="og:description" content="Skill-based football management. Real cash prizes. No pay-to-win.">
<meta property="og:image" content="./images/og-image.jpg">
```

---

## FINAL CHECKLIST BEFORE SUBMITTING CODE

- [ ] Single `index.html` file (or clean multi-file if preferred)
- [ ] Mobile-responsive at 375px, 768px, 1280px
- [ ] Quiz works end-to-end (4 questions → result → retake)
- [ ] Leaderboard animates on scroll
- [ ] Email form shows success message (no backend needed)
- [ ] All images referenced as `./images/filename.jpg`
- [ ] No console errors
- [ ] Deployable to Netlify by drag-and-drop of folder

---

## HOOK (2-sentence pitch — include in submission email)

> **"You're not the luckiest. You're the best."**
> Legendary Club Owner is the only football management game where every win comes from your brain, not your bank account — and the leaderboard pays real money to prove it.

---

*Prompt written for Codex AI. Generate complete, production-ready code.*
