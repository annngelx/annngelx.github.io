/** Where things stand in the water garden. Units are metres; the pool surface is y = 0. */
export const L = {
  DAIS: { x: 0, z: 0, r: 4.7, y: 0.55 },             // round marble platform in the middle of the pool
  ARM: { x: -2.55, z: 0.55 },                        // the sculptor arm's base on the dais
  GLOBE: { x: 1.95, y: 3.05, z: -0.25, r: 1.28 },    // marble celestial globe it engraves
  CROWN: { x: 0, y: 7.2, z: -3.2, r: 1.85 },          // armillary sphere hanging under the dome
  ROTUNDA: { r: 19, bays: 18 },                      // ring of arches around the pool
  WALK: { r0: 17.3, r1: 20.6, y: 0.6 },              // marble walkway the columns stand on
  CAT: { x: 2.3, y: 0.78, z: 9.6 },                  // stepping stone where the cat sits
  CAM: { x: 0.5, y: 1.75, z: 15.9 },
  DOCK: { x: -68, y: 3.2, z: -150 },                 // far pier where the shuttles land
  FALLS: { x: 40, z: -78 },                          // terrace with waterfalls, seen through the arches
  SHIP: { x: 195, y: 185, z: -1100 },
};

/** Stepping stones in the pool as [x, z, radius, top]; the cat's is the tall one. */
export const STONES = [[L.CAT.x, L.CAT.z, 0.92, L.CAT.y], [0.6, 8.3, 0.8, 0.2], [-1.6, 10.4, 0.7, 0.2], [3.9, 12.1, 0.75, 0.2], [-3.4, 7.2, 0.6, 0.2]];

/** Height of whatever a falling petal or a walking creature would meet at (x, z). */
export function heightAt(x, z) {
  for (const [sx, sz, sr, top] of STONES) if (Math.hypot(x - sx, z - sz) < sr) return top;
  const r = Math.hypot(x - L.DAIS.x, z - L.DAIS.z);
  if (r < L.DAIS.r) return L.DAIS.y;
  if (r < L.DAIS.r + 1.3) return 0.2;
  if (r > L.WALK.r0 && r < L.WALK.r1) return L.WALK.y;
  return 0;
}
