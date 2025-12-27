<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Games Main Screen</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
      tailwind.config = {
        // We will only use the light mode for this Candy Land theme
        // darkMode: "class",
        theme: {
          extend: {
            colors: {
              // Candy Land Theme Colors
              "primary": "#FF69B4", // Bubblegum Pink
              "secondary": "#FFD700", // Sunny Yellow
              "background-light": "#E0FFFF", // Soft Sky Blue (PaleTurquoise-like)
              "background-dark": "#E0FFFF", // Using light for consistency, dark mode removed
              "surface-dark": "#FFFFFF", // White for cards in light theme, dark mode removed
              "surface-light": "#FFFFFF", // White for cards
              "text-dark": "#36454F", // Charcoal Grey for dark text on light backgrounds
              "text-light": "#FFFFFF", // White text on dark backgrounds
              "accent-text": "#87CEEB", // Light Sky Blue for softer accents
              "border-light": "#ADD8E6", // Light Blue for borders
              "gradient-start": "#FFA07A", // Light Salmon for gradient (if needed)
              "gradient-end": "#FF6347", // Tomato for gradient (if needed)
            },
            fontFamily: {
              "display": ["Plus Jakarta Sans", "sans-serif"],
              "body": ["Noto Sans", "sans-serif"],
            },
            borderRadius: {
              "DEFAULT": "0.5rem",
              "lg": "1rem",
              "xl": "1.25rem",
              "2xl": "1.5rem", // More bubbly corners for kids
              "full": "9999px"
            },
          },
        },
      }
    </script>
<style>
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light text-text-dark font-display antialiased selection:bg-primary selection:text-white">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-20">
<header class="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 backdrop-blur-md p-4 pb-2 pt-12 lg:pt-4 border-b border-border-light">
<div class="flex items-center gap-3">
<div class="flex size-10 items-center justify-center rounded-xl bg-primary text-text-light shadow-lg shadow-primary/30 transform transition hover:scale-105">
<span class="material-symbols-outlined text-2xl">sports_esports</span>
</div>
<h1 class="text-xl font-extrabold tracking-tight text-text-dark">FunZone</h1>
</div>
<div class="flex items-center gap-2">
<button class="flex size-10 items-center justify-center rounded-full text-accent-text hover:bg-white transition-colors">
<span class="material-symbols-outlined">search</span>
</button>
<button class="flex size-10 items-center justify-center rounded-full text-accent-text hover:bg-white transition-colors">
<span class="material-symbols-outlined">settings</span>
</button>
</div>
</header>
<div class="px-4 pt-6 pb-2">
<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-text-dark">
                Ready to <span class="text-primary drop-shadow-sm">Play?</span>
</h2>
<p class="mt-1 text-sm font-semibold text-accent-text">Discover your next adventure!</p>
</div>
<div class="px-4 py-4">
<div class="relative flex w-full items-center">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-accent-text">
<span class="material-symbols-outlined">search</span>
</div>
<input class="block w-full rounded-2xl border-none bg-white py-3.5 pl-11 pr-4 text-sm font-bold text-text-dark shadow-sm ring-2 ring-border-light focus:ring-2 focus:ring-primary placeholder:text-accent-text transition-all" placeholder="Search for games, tags..." type="text"/>
</div>
</div>
<div class="flex w-full overflow-x-auto hide-scrollbar pb-2 pt-1 pl-4">
<div class="flex gap-3 pr-4">
<button class="flex h-9 min-w-[80px] shrink-0 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-text-light shadow-md shadow-primary/20 transition-transform active:scale-95">
                    All
                </button>
<button class="flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-text-dark ring-2 ring-border-light hover:bg-white hover:text-primary transition-all active:scale-95">
                    Action
                </button>
<button class="flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-text-dark ring-2 ring-border-light hover:bg-white hover:text-primary transition-all active:scale-95">
                    Puzzle
                </button>
<button class="flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-text-dark ring-2 ring-border-light hover:bg-white hover:text-primary transition-all active:scale-95">
                    Arcade
                </button>
<button class="flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-text-dark ring-2 ring-border-light hover:bg-white hover:text-primary transition-all active:scale-95">
                    Racing
                </button>
<button class="flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-text-dark ring-2 ring-border-light hover:bg-white hover:text-primary transition-all active:scale-95">
                    Sports
                </button>
</div>
</div>
<main class="flex-1 px-4 py-4">
<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Colorful retro arcade screen with neon lights" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZpEETK_UsAVNfE5HnD7yyH42Y8Ph9bNELqTLTFUFGLB6B-_Xu8Bubi7Y4lf_gJK_p7OIgFYWeMSYc0lR-uEAiVgggxnkspnMSNxWj8IgatLunhm01qrA3MXBQt6asj-nvvuYa9xVrQolKUVs8A_zA2Y2cOZRDKkBabB9F9Sdqi2KxxlseYCTxlg3nb5g8PjEDqWFNvndYbi_yK4CFiPLz3xZM9u8gYs5Pryhh94YX4RnNOyDfRbAyeDqCXWV1O-1UedyvUjfr8AV0');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<span class="absolute right-2 top-2 rounded-lg bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">Free</span>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Space Dash</h3>
<p class="text-xs font-semibold text-accent-text">Action • 4.8 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Abstract colorful geometric shapes resembling a puzzle" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuApBgDl3oxsO5cLmFRCU3m5W8o44SWGK6rSzOIylZ2a-knc9oDRBMCvzt-P7QTVg-JC39_eIKitVPlwM9sbCrDM9ndP9NVOGIh4pr0V-b2rnS6sm-KLT2uGXiQz8C_viWLZMdQc9Lm1zWlnZ25zMApbeLt6sfKD-NXj73SRvKQx9_LOzk08OIqy3-WKxH4tHmF35yQ_dJvr_xRsabQx42op4bmLkUrK1TKHd6mdja6zPf5E2L5K4L7kKEt_aW12TvNdK3hpR9tAtADH');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<span class="absolute right-2 top-2 rounded-lg bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">New</span>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Cube Puzzle</h3>
<p class="text-xs font-semibold text-accent-text">Puzzle • 4.5 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Blurry motion shot of a racing car video game" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLNCxxaajuP0vwM7muOBabvHBxASNYkp9bZuXBQhaIHtNJXwpCQep7TXLi1QGF7OG7Z67z-8W3Kv1wvC-YKWtlenkEcK7koUdTl06ZEVgsDtyvPoOPeD-uGy2fTgonoE3GxK8BbvCGtN1XNIn88kgF7vwQfeNmGwCWoPLPscG1COG3B9bSKP2XsZbsOe-o8pGrsx5RgK71UwS0KcbkLU-5QoCnWcinQCBtcOoKf-FA-pNzNd-F3bl7Ohm9juKv1aDONl22VrQQdlxU');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Nitro Racer</h3>
<p class="text-xs font-semibold text-accent-text">Racing • 4.9 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Vibrant cartoon character jumping in a colorful world" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTi8ktzYeGQTvZaz7MA18AMvD7XWYcIftw_V3rxwELK9B_OwQL34byl_cdM-x6dp-shYVEbcCuUQbD053-CDCizv2vCH7HqRcDQ0YNEavbCtbSmYhN8SIgsj1VFMTNGRNwoZ2Q19jxPWanhX2HZmpjzvh7YlQAZlPquXy-IM7mXmNmPus2ZEMcilpO9ZAsZMYBlCn2LsgHZSRnJcfVMgqFRHXPMSwrvw9pctXbZJ_zhKO9E8fKWWRlJPZeM3DuyT033lTzD16rX8YY');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Super Jump</h3>
<p class="text-xs font-semibold text-accent-text">Arcade • 4.2 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Soccer ball on a green field graphic" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh7yLODtkKloE_b6ezA2u5QOhOKJ2sWz6rod6hiUsWtADfDCTp4em4V0nuuiU-GlUjI8l3Q3Wgo6-3mvrKxvzOenVy3ag_sU4hc5dy6i4bHh-9Cg9vhjoFwyniDyHtil6CarlkatzYG7sYhH8KBGUVMQ6qHFmj_JWBVQ2ADrbw56dFelYK-ZFGtTFRt87KJ-q83TIUyLKKw8pKbYxa8FcixCiF9OJROFs2QfBuovopPD99HK9ao3mrGqCt3bvAmt6BjEuaAuanMl7F');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<span class="absolute right-2 top-2 rounded-lg bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">Live</span>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Pixel Soccer</h3>
<p class="text-xs font-semibold text-accent-text">Sports • 4.7 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
<div class="group relative flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-border-light transition-all hover:shadow-md hover:ring-primary/50 active:scale-95">
<div class="relative aspect-square w-full overflow-hidden rounded-xl bg-accent-text/20">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Sweet candy pattern background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXcBaPdgzIiqwPeICFfZsMKSo4Gz1yLUFINIpGuCvnT33orBKgqqAIC5JEPjgyV6dtUpeLEMxAesO68cPTPaFUOAWfm_OYG-QpcAWKPJfw7qFKL4xWa7feubsleHTru5knJqRWEOnNBTQB73zDeqzOg-1O558dhv9pRVVpPZ1oIwHFpzx5eEcnQHbAa2azMGzz8XOiHbSWEtmoE_EFwQFkh72Sc1Vy9hUAutgRzELPED4SBeBIkgi2jE35XSEV92mismiqk4CD29bN');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-text-dark/60 to-transparent"></div>
<div class="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-full bg-primary text-text-light shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[22px] ml-0.5">play_arrow</span>
</div>
</div>
<div class="px-1 pb-1">
<h3 class="line-clamp-1 text-base font-bold text-text-dark group-hover:text-primary transition-colors">Candy Pop</h3>
<p class="text-xs font-semibold text-accent-text">Casual • 4.6 <span class="text-secondary text-[10px]">★</span></p>
</div>
</div>
</div>
</main>
<nav class="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-border-light bg-white/95 pb-4 backdrop-blur-md">
<button class="group flex flex-col items-center gap-1 p-2 text-primary">
<span class="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">home</span>
<span class="text-[10px] font-bold">Home</span>
</button>
<button class="group flex flex-col items-center gap-1 p-2 text-accent-text hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">favorite</span>
<span class="text-[10px] font-bold">Favorites</span>
</button>
<button class="group flex flex-col items-center gap-1 p-2 text-accent-text hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">person</span>
<span class="text-[10px] font-bold">Profile</span>
</button>
</nav>
</div>
</body></html>