# Garden art direction

- Follow the user's references: pale carved stone, layered mouldings, botanical relief, hanging greenery, blue water and distance. Use the original warm gold (0xdcb45e / 0xc9a15a); the user prefers it to the later muted brass. Build depth through geometry, light and shadow rather than stronger marble veins.
- Keep marble on large arches, the cornice and globe subtle. The user specifically rejected heavy gray veining there. Keep the globe's gold star chart legible.
- Keep the garden luminous in both moods. The user rejected the dark, high-contrast lighting pass; retain soft shadow detail with generous sky bounce rather than dimming the entire scene.
- The cat represents the user and must stay clearly lit. Keep its soft key/fill and cast contact shadow, but do not let architectural shadows fall across the cat or scarf. Avoid a busy grid of overhead shadows on the workstation.
- Keep the cat's tail smooth and closed, with the animated scarf colliding against it rather than passing through it.
- The arm's engraving laser should read clearly at the normal camera distance, with a defined beam and surface contact glow. Keep its marks aligned with that contact and switch the beam off when the arm lifts away.
- Preserve the energetic fighter choreography, camera shake, gusts and character responses. The user wants more garden detail, not reduced motion strength. Respect the visitor's reduced-motion preference. The user explicitly removed the Skip intro and play/pause buttons; do not reintroduce them.
- Exterior traffic must visibly cross the normal desktop and portrait views. The user requested two successive halvings of the added fleet: now six craft on high/mid and four on low. Preserve the remaining ships' motion and the original fighter passes.
- Falling particles must have botanical silhouettes: curved petals or pointed leaves, not white rectangular confetti.
- Keep the homepage navigation transparent over the scene, including loading. No opaque intro bars behind it. Reveal WebGL only after a successful full frame; the day/night loading posters must match the initial camera pose.
- Keep the sun/moon switch in the top-right navigation and remember a visitor's explicit choice. Blend day/night lighting in the same running scene: never rebuild it, replace its canvas, reset its clock or replay the intro when switching. Keep ships, arm, cat, cloth, and camera motion continuous.
- Keep the writing scroll cue centered at the bottom. The latest-essay button has no arrow.
- On phones the name, lede and button must stay readable. The user reported them colliding with the arm, globe and cat. The portrait camera now fits those subjects into the band between the navigation and the text (`fitTall` in `main.js`, fed by `band` in the home page script), and the text sits over open water with a veil behind it. Do not move the subjects back behind the text or weaken the veil without checking a phone-sized capture in both moods.

After scene changes, rebuild `site/assets/js/world.js` and refresh the scene preview images in `site/assets/img/world-*.webp` when their appearance changes. Check day/night, desktop/portrait, and loading as well as the settled scene.
