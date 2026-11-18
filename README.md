# angelxu site

A static personal site with a real-time Three.js garden and bilingual essays.

```
site/      <- the published site
  index.html                         home page with the 3D landing scene
  writing/agentic-robotics/          the essay in English
  zh/writing/agentic-robotics/       the same essay in Chinese
  assets/css/site.css                all styles
  assets/js/world.js                 the landing scene (three.js bundled in, MIT licence alongside)
  assets/fonts/                      self-hosted Archivo + Source Serif 4 (SIL Open Font License)
  assets/img/                        figures and screenshots (WebP)
  favicon.svg, 404.html, .nojekyll
source/    <- what the site is generated from
  content/                           the essays in Markdown (<slug>.md and <slug>.zh.md)
  build.py                           settings + Markdown -> HTML pages
  requirements.txt                   the one Python library the build needs
  world/                             source of the 3D scene (plain JavaScript modules)
  package.json                       bundles world/ into site/assets/js/world.js
.github/workflows/pages.yml          rebuilds the pages and 3D scene, then publishes to GitHub Pages on every push
```

## Preview it on your laptop

```
cd site && python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight from the disk won't run the 3D scene, because browsers block script modules on `file://` pages.

## Publish on GitHub Pages

The site uses the `annngelx` organization, managed by the `maxing999` account.

- Website: https://annngelx.github.io/
- Repository: https://github.com/annngelx/annngelx.github.io
- Deployment source: GitHub Actions, configured in repository Settings > Pages.

Every push to `main` runs **Build and deploy the site**, rebuilding the essays and 3D bundle before publishing `site/`. To publish an update from this folder:

```
git add README.md .github source site
git commit -m "Update site"
git push
```

Check the repository's Actions tab for the result. A failed build leaves the previous deployment in place. The workflow can also be run manually from that tab.

For your own domain later, enter it under Settings > Pages > Custom domain, add the DNS records GitHub lists there, and change `SITE_URL` at the top of `source/build.py` to the new address. `SITE_URL` is what pages report as their full address to search engines and link previews.

The same `site/` folder also works on Netlify, Vercel or Cloudflare Pages if you ever move.

## About text, topics and profile links

All of these are at the top of `source/build.py`:

- `ABOUT` is the paragraph in the About section, and `LEDE` is the line under your name on the landing scene. Both describe what the site covers.
- `TOPICS` lists what an essay can be filed under (robotics and physical AI, technology trends, the world at large). Give each essay in `ARTICLES` a `topic`; its label appears beside the date on the home page. Add a line to `TOPICS` to open a new one.
- `LINKS` holds your profiles as a label and an address, for example `("@angel_flowstate on X", "https://x.com/angel_flowstate")`. They appear in the About section and in the footer of every page. A link shows up once its address is filled in, so add your LinkedIn address when you have it.

Run `python3 source/build.py` afterwards (needs `pip install markdown`).

## Essays in English and Chinese

- English text is `source/content/<slug>.md`; the Chinese version is `source/content/<slug>.zh.md`. An essay with only one of them is published in that language alone, and the home page links to that version.
- Add the essay to `ARTICLES` in `build.py` with its date and a title and summary per language, then run `python3 source/build.py`.
- English pages live at `writing/<slug>/`, Chinese ones at `zh/writing/<slug>/`. Each links to the other from the top bar and the sidebar, and the home page lists both.
- In the Chinese file, end each heading with the English heading's id, like `## 1. 分层编排 {#1-layered-orchestration}`. Switching language then lands the reader on the same section.
- Chinese pages use the reader's system Chinese fonts (PingFang on Apple devices, YaHei on Windows), because Chinese web fonts are several megabytes each.
- The landing page itself is in English only.
- Chinese translations follow the editorial rules in `source/content/AGENTS.md`: natural Chinese prose, original English technical terms and names, and unchanged evidence and citations. The current essay keeps its original English title on both language pages; its Chinese metadata sets `title_lang="en"` for correct language tagging.

How the Markdown is laid out for reading:

- The title is set at about three times the body size and shares the left edge of the text. The sizes are in the "article header" and "prose grid" parts of `site.css`.
- A bold line on its own (`**Key evidence**`) becomes a small heading for the list or passage under it. A bold sentence that ends in a full stop stays ordinary bold text.
- On phones each table row becomes a card, with every value under the name of its column, and the four-approaches diagram scrolls sideways at a readable size.
- The floating "Contents" button on small screens hides while the reader scrolls down and returns when they scroll up.

## The article sidebar

Every essay page gets a sidebar: your name and avatar, the essay title, the language switch, a contents tree that highlights the section being read, a reading-progress bar with a percentage, a copy-link action and a jump back to the title.

- The tree is built from the essay's `##` and `###` headings each time you run `build.py`, so new essays get it with no extra work. Sub-headings fold under their parent and open when the reader reaches them.
- The arrow at the top hides the sidebar; a small "Contents" button brings it back. The choice is remembered on that device.
- On screens narrower than a laptop it becomes a drawer, opened from the same "Contents" button, which also shows the percentage read.
- Without JavaScript the tree still works as plain links; with "reduce motion" on, nothing slides or smooth-scrolls.
- On phones the drawer keeps keyboard focus inside it and pauses background scrolling. Escape, the close button, or the backdrop returns focus to Contents; choosing a section moves focus to that heading.

Where to change it: the markup, the avatar drawing (`CAT_AVATAR`, swap in an `<img>` of your own if you prefer), the wording in both languages (`STR`) and the behaviour are in `source/build.py` (`rail()` and `RAIL_SCRIPT`); the look is the "article sidebar" part of `site/assets/css/site.css`.

## The landing scene

The home page opens on a real-time 3D scene drawn with three.js: a water garden inside a white marble rotunda with a glass dome. In the middle of the pool a white-and-gold machine arm engraves constellations onto a marble celestial globe. A cat in a gold scarf watches from a stepping stone. There are no people in it.

It has two moods, and the visitor's own clock picks one: daylight from 06:00 to 18:00, a moonlit garden otherwise. The title, veil and fallback background change with the mood (ink on marble by day, white on deep blue at night). To see either at any hour, add `?time=day` or `?time=night` to the address.

What moves, and how:

- **The arm and the globe.** The arm glides in, presses a star into the marble, drags a gold line to the next one, lifts away, and the globe turns the finished constellation toward the room. Joint targets follow minimum-jerk curves and then pass through springs, so the arm overshoots slightly and settles. Fresh marks glow, then cool to gold inlay.
- **Armillary spheres.** A large one hangs under the dome and smaller ones stand on the dais and the walkway; every ring keeps its own slow time. The hanging one flares and spins up when the fighters pass.
- **Ships.** A capital ship with a turning ring hangs beyond the arches. Two shuttles fly between it and a far pier. A pair of fighters comes in over the dome about every 27 seconds and drops through the view of the centre arch.
- **The cat.** Head and ears follow the ships, the right paw reaches up for them, the tail carries a wave from base to tip, and the scarf tails are simulated cloth.
- **Beyond the garden.** Commuters, slow cargo carriers, water skiffs and maintenance craft cross at several depths outside the dome, with closer routes visible through the central arches.
- **Workbench and landscape.** A crescent marble desk holds a constellation chart, brass drafting tools and a shaded lamp. The distant woodland has branching trunks and porous leaf sprays; the falls split into turbulent streams, foam and drifting mist.
- **Water and plants.** The pool is a true mirror with slow ripples. Hanging vines and wisteria sway in a shared wind field; petals drift down and float; lily pads and lotus sit on the water. By day there are butterflies and a far flock of birds; at night fireflies, lit lanterns, and white roses and lotus that glow.
- **Camera.** The visit starts under the dome and comes down to the water. Your name, introduction, and writing links are available immediately over a scene preview while WebGL loads. Returning visitors in the same tab get a shorter opening; Esc ends it at once.

It adapts to the device: three quality tiers, and it lowers resolution, then the sharpness of the pool's reflection, if the frame rate drops. The mobile tier also smooths thin edges with FXAA. The writing scroll link is centered at the bottom. With "reduce motion" switched on in the operating system it shows one still frame. Without WebGL 2 the page keeps a scene preview behind the same title and links.

Loading previews in `site/assets/img/world-*.webp` match day/night, desktop/portrait, and opening/settled camera poses. The page selects the matching preview before its first paint and reveals the canvas only after a complete render. The navigation stays transparent throughout; there are no opaque intro bars or fade from a solid color.

The home page preloads the 3D module and `world-marble.webp`. This lossless 1024px texture contains the procedural marble's exact pixels, avoiding the expensive bake during normal startup and allowing the browser to cache it. If it cannot load, the scene generates the same texture locally. When changing `marbleTexture()` in `util.js`, regenerate the baked asset from its canvas and encode it as lossless WebP as well.

The close-up details include machined joint fasteners, bevelled armillary rings with calibration marks, veined marble, and a stitched scarf with a small star clasp. Spring integration uses small substeps to keep weight and overshoot consistent across frame rates. Fighter choreography, camera shake, wind impulses, water ripples and character reactions keep their original strength.

Handy while tuning: add `?q=low`, `?q=mid` or `?q=high` to force a tier, or `?still=12` to freeze the scene 12 seconds in. These combine, for example `?time=night&still=12`.

### Changing the scene

The scene's source is in `source/world/`:

| File | What it holds |
| --- | --- |
| `ground.js` | `L`, the table of where everything stands |
| `atmo.js` | the two moods (one table of light, sky, fog and glow settings each), the sky, haze |
| `garden.js` | dais and stepping stones, the rotunda and dome, far mountains, the waterfall cliff, the shuttle pier |
| `ornament.js` | carved arch trim, botanical relief, capitals, cornice mouldings and globe-plinth supports |
| `landscape.js` | instanced woodland, layered waterfall streams, foam and mist |
| `workbench.js` | marble desk, drafting tools, chart, lamp and platform joints |
| `instruments.js` | the arm, the globe and its engraving, the armillary spheres |
| `flora.js`, `life.js` | vines, lily pads, lotus, roses; dust, petals, birds, butterflies, fireflies |
| `water.js` | the mirror pool |
| `cat.js` | the cat, its scarf cloth, tail and the small companion drone |
| `ships.js` | capital ship, shuttles, fighters and their flight paths |
| `exterior.js` | commuter, freight, water-skiff and maintenance traffic |
| `kit.js`, `util.js` | materials (marble, gold, glass), shape helpers, procedural textures, springs |
| `stone.js` | world-space marble mapping, mineral veining and surface polish |
| `post.js` | bloom, light shafts and the final grade |
| `main.js` | mood choice, lights, camera moves, quality tiers, the render loop |

After editing, rebuild the bundle (needs Node 18 or newer):

```
cd source
npm install
npm run build:world
```

To change when night begins, edit the two hours in the home page script in `build.py` (function `build_home`); the same function holds the title, the short text under it and the button, which are ordinary HTML styled in the "3D world hero" part of `site.css`. Colours follow the site: marble `#f6f4ef`, ink `#1c1b20`, gold `#c79f43`.
