/**
 * Seeded PRNG implementation using mulberry32 algorithm
 * Provides deterministic random number generation from a string seed
 */

/**
 * Hash a string to a 32-bit unsigned integer
 * Simple hash function for converting seed strings to numbers
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) >>> 0; // Ensure unsigned 32-bit
}

/**
 * Mulberry32 PRNG - fast, simple, good quality
 * Returns a function that generates random numbers between 0 and 1
 */
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Create a seeded RNG from a string seed
 * @param seed - String seed (e.g., "a3f2b1c9")
 * @returns Function that returns random numbers between 0 and 1
 */
export function createSeededRNG(seed: string): () => number {
  const numericSeed = hashString(seed);
  return mulberry32(numericSeed);
}

/**
 * Pick one random element from an array using the RNG
 * @param list - Array to pick from
 * @param rng - Seeded RNG function
 * @returns Random element from the array
 */
export function pickOne<T>(list: readonly T[], rng: () => number): T {
  const index = Math.floor(rng() * list.length);
  return list[index];
}

/**
 * Pick multiple random elements from an array (without replacement)
 * @param list - Array to pick from
 * @param count - Number of elements to pick
 * @param rng - Seeded RNG function
 * @returns Array of randomly selected elements
 */
export function pickMany<T>(list: readonly T[], count: number, rng: () => number): T[] {
  const available = [...list];
  const result: T[] = [];
  
  for (let i = 0; i < count && available.length > 0; i++) {
    const index = Math.floor(rng() * available.length);
    result.push(available[index]);
    available.splice(index, 1);
  }
  
  return result;
}

/**
 * Generate a random seed string (8 characters, base36)
 * @returns Random seed string
 */
export function generateSeed(): string {
  return Math.random().toString(36).substring(2, 10);
}
