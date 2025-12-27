# BuyInstantHTML5Games Integration

## Checkups
- Copied all game folders from uyinstanthtml5games/ and uyinstanthtml5games/incomplete/ into public/games/<slug>/.
- Removed c2runtime_data.js license gate references and disabled game service workers.
- Added Playstori Home icon + fullscreen helper to each index.html.
- Backfilled missing icons/icon-128.png and loading-logo.png where possible using icons/icon-256.png.

## Game Folder Mapping
| Original Folder | New Slug | Public Folder |
| --- | --- | --- |
| 25_amazingcube | amazingcube | public/games/amazingcube |
| 104_angry_block | angry-block | public/games/angry-block |
| 102_archer | archer | public/games/archer |
| 56_books_tower | books-tower | public/games/books-tower |
| 101_box_runner | box-runner | public/games/box-runner |
| 54_bright_ball | bright-ball | public/games/bright-ball |
| 10_cars_movement | cars-movement | public/games/cars-movement |
| 50_catchdots | catchdots | public/games/catchdots |
| 66_catch_the_number | catch-the-number | public/games/catch-the-number |
| 74_changer_jam | changer-jam | public/games/changer-jam |
| 42_choosegravity | choosegravity | public/games/choosegravity |
| 11_circle_flip | circle-flip | public/games/circle-flip |
| 46_circleshooter | circleshooter | public/games/circleshooter |
| 63_color_block | color-block | public/games/color-block |
| 13_color_circle | color-circle | public/games/color-circle |
| 57_crazy_chicks | crazy-chicks | public/games/crazy-chicks |
| 28_crossbarchallenge | crossbarchallenge | public/games/crossbarchallenge |
| 05_destroy_boxes | destroy-boxes | public/games/destroy-boxes |
| 12_dontdropthewhiteball | dontdropthewhiteball | public/games/dontdropthewhiteball |
| 15_dontdropthewhiteball2 | dontdropthewhiteball2 | public/games/dontdropthewhiteball2 |
| 75_dot_and_lines | dot-and-lines | public/games/dot-and-lines |
| 06_dots_attack | dots-attack | public/games/dots-attack |
| 45_dotspong | dotspong | public/games/dotspong |
| 97_dots_puzzle | dots-puzzle | public/games/dots-puzzle |
| 67_draw_the_path | draw-the-path | public/games/draw-the-path |
| 04_extreme_way | extreme-way | public/games/extreme-way |
| 16_fallingbottle | fallingbottle | public/games/fallingbottle |
| 27_fallingdots | fallingdots | public/games/fallingdots |
| 62_falling_fruits | falling-fruits | public/games/falling-fruits |
| 01_falling_gadgets | falling-gadgets | public/games/falling-gadgets |
| 49_fastarrow | fastarrow | public/games/fastarrow |
| 51_flipcube | flipcube | public/games/flipcube |
| 47_flyingtriangle | flyingtriangle | public/games/flyingtriangle |
| 70_garbage | garbage | public/games/garbage |
| 79_goalkeeper_challenge | goalkeeper-challenge | public/games/goalkeeper-challenge |
| 39_gotodot | gotodot | public/games/gotodot |
| 92_halloween_tetris | halloween-tetris | public/games/halloween-tetris |
| 02_happy_helloween | happy-helloween | public/games/happy-helloween |
| 26_hltd | hltd | public/games/hltd |
| 96_hole | hole | public/games/hole |
| 59_impossible_rise | impossible-rise | public/games/impossible-rise |
| 30_juicebottle | juicebottle | public/games/juicebottle |
| 32_jumpballarcade | jumpballarcade | public/games/jumpballarcade |
| 36_jumpbottleflip | jumpbottleflip | public/games/jumpbottleflip |
| 40_jumpboxhero | jumpboxhero | public/games/jumpboxhero |
| 18_jumpninjahero | jumpninjahero | public/games/jumpninjahero |
| 35_jumpredsquare | jumpredsquare | public/games/jumpredsquare |
| 60_knives | knives | public/games/knives |
| 20_lemonade | lemonade | public/games/lemonade |
| 64_magnets | magnets | public/games/magnets |
| 33_mannequinhead | mannequinhead | public/games/mannequinhead |
| 48_mrpong | mrpong | public/games/mrpong |
| 76_network | network | public/games/network |
| 52_pingpong | pingpong | public/games/pingpong |
| 41_pocketjump | pocketjump | public/games/pocketjump |
| 73_proton_vs_electron | proton-vs-electron | public/games/proton-vs-electron |
| 68_pull_the_thread | pull-the-thread | public/games/pull-the-thread |
| 53_put_bacon | put-bacon | public/games/put-bacon |
| 29_racinggamechallenge | racinggamechallenge | public/games/racinggamechallenge |
| 95_red_jumper | red-jumper | public/games/red-jumper |
| 43_rescuers | rescuers | public/games/rescuers |
| 08_retro_speed | retro-speed | public/games/retro-speed |
| 24_retrospeed2 | retrospeed2 | public/games/retrospeed2 |
| 44_rotare | rotare | public/games/rotare |
| 58_santa_runner | santa-runner | public/games/santa-runner |
| 07_save_rocket | save-rocket | public/games/save-rocket |
| 17_saws | saws | public/games/saws |
| 37_shotpong | shotpong | public/games/shotpong |
| 21_smileys | smileys | public/games/smileys |
| 23_speartoss | speartoss | public/games/speartoss |
| 31_stickymanrun | stickymanrun | public/games/stickymanrun |
| 38_superbox | superbox | public/games/superbox |
| 34_superspeedrunner | superspeedrunner | public/games/superspeedrunner |
| 19_switchdash | switchdash | public/games/switchdash |
| 09_tap_tap_challenge | tap-tap-challenge | public/games/tap-tap-challenge |
| 72_tetrablocks | tetrablocks | public/games/tetrablocks |
| 03_tic_tac_toe | tic-tac-toe | public/games/tic-tac-toe |
| 65_tightness | tightness | public/games/tightness |
| 82_triangle_way | triangle-way | public/games/triangle-way |
| 100_trick_shot | trick-shot | public/games/trick-shot |
| 61_word_cargo | word-cargo | public/games/word-cargo |

## Games Needing Fixes (after copy)
Removed from `public/games` and `public/games.json` on request:
- beat-hop
- christmas-merge
- color-tower
- exit
- falling-numbers
- fill-the-holes
- merge-numbers
- neon-block
- passage
- pushout
- snake-and-circles
- spiral-paint
- sticky-balls
- switch-hexagon
- the-blackwhite
- turkey-adventure
