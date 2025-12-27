# Paintgame.me (ig3)

Special handling when importing from `ig3/paintgame.me...`:

- Use the `preview/v1` folder as the source game build.
- Remove the line that mentions "Live preview on codecanyon.net" from the game's `index.html`.
- Disable the game service worker by removing `scripts/register-sw.js` from `index.html`.
- Add the Playstori Home icon + fullscreen helper script to `index.html`.
- Replace any stub assets that contain `No Content: https://...` by downloading the real file from the referenced URL.
- If Construct logs audio decode errors, refresh `media/*.webm` by re-downloading from `https://paintgame.me/<slug>/preview/v1/media/` (the ig3 pack audio can be mismatched).
- If `box2d.wasm.js` aborts at runtime, re-download `box2d.wasm` (and `box2d.wasm.js` if needed) from `https://paintgame.me/<slug>/preview/v1/`.
- If an old Construct service worker is still serving stale assets, unregister SW for the game scope and clear `c3offline-*` caches (can be done via a small script in `index.html`).
- Replace Live Preview On CodeCanyon.net with PlayStori in data.json

