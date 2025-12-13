# 🦉 Playstori
**Where Stories Come to Play.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)]()
[![Privacy: 100%](https://img.shields.io/badge/Privacy-100%25-blue.svg)]()

**Playstori** is an open-source initiative to reclaim children's digital time from algorithms and ads. It is an offline-capable Game Launcher that prioritizes **safety, privacy, and heritage**.

👉 **Live Demo:** [https://playstori.org](https://playstori.org)

---

## 🛡️ The Mission
Modern "free" games are often traps designed to harvest data or show ads. Playstori is different:
*   **Offline First:** Works perfectly in Airplane Mode. Wisdom doesn't need WiFi.
*   **Zero Data:** No analytics, no cookies, no accounts. What happens in Playstori stays on the device.
*   **The "Star Economy":** A gentle, internal reward system (Stars & Stickers) that encourages play without addiction.

## 🚀 Tech Stack
Playstori is built to be lightweight, maintainable, and "hackable" by parents.
*   **Core:** Vanilla JS + HTML5 + CSS3
*   **Bundler:** Vite
*   **Native Wrapper:** CapacitorJS (for Android/iOS)
*   **Offline Logic:** Vite PWA Plugin + LocalStorage

## 📂 Project Structure
We separate the **Engine** from the **Content** so you can easily add games.

*   `src/` -> The Launcher Logic (App Store, Settings, Star Counting).
*   `public/games/` -> **The Content.** Drag and drop HTML5 games here.
*   `public/games.json` -> **The Database.** Edit this text file to add new games.

## 🎮 How to Add a New Game
Want to contribute a game or add one for your own child?
1.  Drop the game folder into `public/games/`.
2.  Open `public/games.json`.
3.  Add an entry:
    ```json
    {
      "id": "my-new-game",
      "name": "Super Logic",
      "path": "games/my-new-game/index.html",
      "thumb": "games/my-new-game/cover.png"
    }
    ```
4.  Rebuild (or just refresh if running locally).

## 🤝 Contributing
We welcome contributions! Whether you are a developer fixing bugs, an artist drawing stickers, or a parent curating open-source games.
Please read `CONTRIBUTING.md` for details.

## 📄 License
Licensed under the MIT License. Use it, fork it, make it yours.