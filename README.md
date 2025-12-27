# Playstori
**Where Stories Come to Play.**

Open-source, offline-capable kids game launcher built with Vite + Capacitor. Safe, ad-free, and easy to extend by dropping HTML5 games into `public/games/` and editing a single JSON file.

---

## Quickstart (local)
1) Install deps: `npm install`
2) Dev server: `npm run dev` (open the printed URL)
3) Build: `npm run build`
4) Preview build: `npm run preview`

## Project structure
- `src/` — launcher UI/logic (built by Vite)
- `public/` — static content
  - `public/games.json` — game database (fetched at runtime)
  - `public/games/` — each game lives in its own folder (standard: `games/<id>/index.html`, thumb `games/<id>/<id>-logo.*`)
  - `public/manifest.json`, `public/icons/` — PWA assets and logo

## How to add or edit games
1) Place the game folder in `public/games/<your-game-id>/` with `index.html` and a `thumb` image. Keep asset paths relative (no external CDNs) so it works offline.
2) Edit `public/games.json` and add/update the entry:
```json
{
  "id": "my-new-game",
  "name": "Super Logic",
  "tag": "logic",
  "path": "games/my-new-game/index.html",
  "thumb": "games/my-new-game/my-new-game-logo.png",
  "description": "Calm logic puzzle."
}
```
3) If the dev server is running, refresh to see it. For production web/native builds, rerun `npm run build` before packaging or deploy.

To award a star from inside the game (iframe mode) on level complete:
```js
window.parent?.postMessage({ type: 'ADD_STAR', gameId: '<your-game-id>' }, '*');
```
If you launch games directly (no iframe), increment the shared counter from the game with:
```js
const key = 'playstori-star-delta';
const next = (Number(localStorage.getItem(key) || '0') + 1).toString();
localStorage.setItem(key, next);
```
The launcher will sync that value on next load.

## Build and preview
- Dev: `npm run dev`
- Prod build: `npm run build`
- Preview prod build: `npm run preview`

## Ship to the web (PWA)
1) `npm run build`
2) Deploy the `dist/` folder to static hosting (Netlify/Vercel/S3/Cloudflare Pages, etc.).
3) When code or content changes, rebuild and redeploy `dist/`.

## Ship to native (Android/iOS)
1) `npm run build`
2) `npx cap sync` (copies `dist/` into the native shells)
3) Android: `npx cap open android`, then build/run or generate a signed bundle in Android Studio.
4) iOS (macOS): `npx cap open ios`, set signing in Xcode, then build/run or Archive for the App Store.
Repeat steps 1–2 after any code/content change you want packaged into the apps.

## Notes
- The app fetches `public/games.json` at runtime; no imports in code, so you can edit it without touching JS.
- Service worker (via vite-plugin-pwa) precaches the app shell; “Download all” in settings caches game assets into `playstori-games`.
- Keep `node_modules/` out of git; commit source + `public/` + lockfile.

## Contributing
PRs welcome: new games, UX polish, accessibility fixes, or content curation.

## ⚖️ License & Commercial Use

**Playstori is free for everyone to use, learn from, and enjoy.**

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

✅ **You are free to:**
*   Download and play the games.
*   Fork the code and modify it for personal use.
*   Use it in a classroom or non-profit setting.

❌ **You may NOT:**
*   Sell this app on the App Store or Google Play.
*   Wrap this code with ads and distribute it.
*   Use this code as part of a paid commercial product.

### 💼 Commercial Inquiries & Whitelabeling
Do you represent a school district, a company, or a publisher? 
We offer commercial licenses for use cases that fall outside the Non-Commercial license.

*   **Sponsors:** Top-tier GitHub Sponsors may receive a temporary commercial license grant.
*   **Partners:** Contact us to discuss whitelabeling or commercial usage rights as.
