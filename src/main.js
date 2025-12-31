import './style.css';
import { Preferences } from '@capacitor/preferences';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true);
  }
});

window.addEventListener('load', () => updateSW());

const els = {
  gamesGrid: document.getElementById('games-grid'),
  searchShell: document.getElementById('search-shell'),
  searchInput: document.getElementById('search-input'),
  searchClear: document.getElementById('search-clear'),
  toast: document.getElementById('toast')
};

const state = {
  games: [],
  stars: 0,
  disabled: new Set(),
  searchTerm: ''
};

const STORAGE_KEYS = {
  stars: 'playstori-stars',
  disabled: 'playstori-disabled',
  starDelta: 'playstori-star-delta'
};

async function loadPrefs() {
  const [stars, disabled] = await Promise.all([
    Preferences.get({ key: STORAGE_KEYS.stars }),
    Preferences.get({ key: STORAGE_KEYS.disabled })
  ]);
  state.stars = parseInt(stars.value ?? '0', 10) || 0;
  const delta = parseInt(localStorage.getItem(STORAGE_KEYS.starDelta) || '0', 10) || 0;
  if (delta > 0) {
    state.stars += delta;
    localStorage.setItem(STORAGE_KEYS.starDelta, '0');
    await Preferences.set({ key: STORAGE_KEYS.stars, value: String(state.stars) });
  }
  state.disabled = new Set(JSON.parse(disabled.value || '[]'));
}

async function saveStars() {
  await Preferences.set({ key: STORAGE_KEYS.stars, value: String(state.stars) });
}

function shuffleGames(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

async function loadGames() {
  const res = await fetch('games.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error('Failed to load games.json');
  const data = await res.json();
  state.games = data?.games || [];
  shuffleGames(state.games);
}

function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  requestAnimationFrame(() => els.toast.classList.add('visible'));
  setTimeout(() => {
    els.toast.classList.remove('visible');
    setTimeout(() => els.toast.classList.add('hidden'), 200);
  }, 2200);
}

function incrementStars(gameId) {
  state.stars += 1;
  saveStars();
  showToast(`+1 star earned${gameId ? ` in ${gameId}` : ''}!`);
}

function handleMessages(event) {
  const { data } = event;
  if (!data || typeof data !== 'object') return;
  if (data.type === 'ADD_STAR') incrementStars(data.gameId);
}

function renderGames() {
  if (!els.gamesGrid) return;
  els.gamesGrid.innerHTML = '';
  const term = state.searchTerm.trim().toLowerCase();
  const filtered = state.games
    .filter((g) => !state.disabled.has(g.id))
    .filter((g) => {
      if (!term) return true;
      return g.name.toLowerCase().includes(term) || (g.tag || '').toLowerCase().includes(term);
    });
  els.gamesGrid.classList.toggle('single-result', filtered.length === 1);
  if (!filtered.length) {
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = 'No games match your search.';
    els.gamesGrid.appendChild(p);
    return;
  }
  const frag = document.createDocumentFragment();
  filtered.forEach((game) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img class="game-thumb" src="${game.thumb}" alt="${game.name} cover" loading="lazy" />
      <div class="game-overlay">${game.name}</div>
    `;
    card.addEventListener('click', () => openGame(game));
    frag.appendChild(card);
  });
  els.gamesGrid.appendChild(frag);
}

function openGame(game) {
  window.location.href = game.path;
}

function setSearchShellState() {
  if (!els.searchShell || !els.searchInput) return;
  const hasValue = Boolean(els.searchInput.value.trim());
  els.searchShell.classList.toggle('has-value', hasValue);
  els.searchShell.classList.toggle('is-open', hasValue || document.activeElement === els.searchInput);
}

function clearSearch() {
  if (!els.searchInput) return;
  els.searchInput.value = '';
  state.searchTerm = '';
  renderGames();
  if (els.searchShell) {
    els.searchShell.classList.remove('has-value');
    els.searchShell.classList.remove('is-open');
  }
  els.searchInput.blur();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupEvents() {
  window.addEventListener('message', handleMessages);

  if (els.searchShell && els.searchInput) {
    els.searchShell.addEventListener('click', (event) => {
      if (event.target === els.searchClear) return;
      els.searchInput.focus();
    });
    els.searchShell.addEventListener('focusin', setSearchShellState);
    els.searchShell.addEventListener('focusout', () => setTimeout(setSearchShellState, 0));
  }

  if (els.searchInput) {
    els.searchInput.addEventListener('input', (event) => {
      state.searchTerm = event.target.value || '';
      setSearchShellState();
      renderGames();
    });
  }

  if (els.searchClear) {
    els.searchClear.addEventListener('click', (event) => {
      event.preventDefault();
      clearSearch();
    });
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      clearSearch();
    }
  });
}

async function start() {
  try {
    await loadPrefs();
    await loadGames();
    renderGames();
    setupEvents();
  } catch (err) {
    console.error(err);
    showToast('Could not load games. Check files and try again.');
  }
}

start();
