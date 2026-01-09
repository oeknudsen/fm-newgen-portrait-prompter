/**
 * Prompt builder for football regen headshot prompts
 * Generates deterministic prompts based on user selections and seed
 */

import {
  Region,
  Gender,
  REGION_NATIONALITIES,
  HAIR_OPTIONS_MALE,
  HAIR_OPTIONS_FEMALE,
  FACIAL_HAIR_OPTIONS,
  EXPRESSION_OPTIONS,
  FACIAL_STRUCTURE_OPTIONS,
  SKIN_DETAIL_OPTIONS,
  EYEBROW_OPTIONS,
  NOSE_OPTIONS,
  EAR_OPTIONS,
} from '../types';
import { createSeededRNG, pickOne } from './seededRNG';

// Base prompt template
const BASE_PROMPT = `Create a hyper-realistic professional football player headshot portrait of a
young {{NATIONALITY}} {{GENDER_FOOTBALLER}} ({{AGE_RANGE}}).

The subject is photographed from the shoulders up, facing directly toward the camera,
centered and symmetrical.

Expression is neutral and calm, mouth closed, no smile.

Background is a plain dark studio background (charcoal or black), clean and distraction-free.

Lighting is soft, even studio lighting from the front and slightly above,
with gentle natural shadows under cheekbones and jawline.
No dramatic or cinematic lighting.

Camera style is a DSLR portrait with an 85mm lens,
shallow depth of field, sharp focus on eyes and face.

Skin texture is highly realistic with visible pores, freckles, light acne,
natural blemishes, and subtle facial asymmetry.
No airbrushing or beauty retouching.

Hair is natural and realistic, styled like a professional footballer,
with visible strand detail.

{{FACIAL_HAIR_LINE}}

Clothing is a plain football training shirt or jersey,
solid color, no logos, no text.

Overall style is a modern football database / scouting profile photo:
clean, neutral, realistic, professional.

Aspect ratio is 1:1 square.
Ultra-high resolution, photorealistic.`;

/**
 * Build the complete prompt with seeded variations
 * @param region - Selected region
 * @param age - Selected age (number)
 * @param gender - Selected gender
 * @param seed - Seed string for deterministic randomization
 * @returns Complete prompt string
 */
export function buildPrompt(
  region: Region,
  age: number,
  gender: Gender,
  seed: string
): string {
  // Create seeded RNG
  const rng = createSeededRNG(seed);

  // Select nationality deterministically based on region and seed
  const nationalities = REGION_NATIONALITIES[region];
  const nationality = pickOne(nationalities, rng);

  // Select gender-appropriate hair style
  const hairOptions = gender === 'male' ? HAIR_OPTIONS_MALE : HAIR_OPTIONS_FEMALE;
  const hair = pickOne(hairOptions, rng);

  // Select facial hair (male only)
  const facialHair = gender === 'male' ? pickOne(FACIAL_HAIR_OPTIONS, rng) : null;

  // Select expression
  const expression = pickOne(EXPRESSION_OPTIONS, rng);

  // Select facial structure
  const facialStructure = pickOne(FACIAL_STRUCTURE_OPTIONS, rng);

  // Select skin details
  const skinDetail = pickOne(SKIN_DETAIL_OPTIONS, rng);

  // Select extras
  const eyebrows = pickOne(EYEBROW_OPTIONS, rng);
  const nose = pickOne(NOSE_OPTIONS, rng);
  const ears = pickOne(EAR_OPTIONS, rng);

  // Build facial hair line
  let facialHairLine: string;
  if (gender === 'male') {
    if (facialHair === 'clean-shaven') {
      facialHairLine = 'Facial hair is clean-shaven.';
    } else if (facialHair === 'light stubble') {
      facialHairLine = 'Facial hair is natural where appropriate (light stubble).';
    } else if (facialHair === 'short beard') {
      facialHairLine = 'Facial hair is natural where appropriate (short beard).';
    } else {
      facialHairLine = 'Facial hair is natural where appropriate (trimmed goatee).';
    }
  } else {
    facialHairLine = 'No facial hair.';
  }

  // Replace placeholders in base prompt (keep base prompt intact)
  const genderFootballer = gender === 'male' ? 'male footballer' : 'female footballer';
  let prompt = BASE_PROMPT
    .replace('{{NATIONALITY}}', nationality)
    .replace('{{AGE_RANGE}}', age.toString())
    .replace('{{GENDER_FOOTBALLER}}', genderFootballer)
    .replace('{{FACIAL_HAIR_LINE}}', facialHairLine);

  // Append seeded variations section
  const variations: string[] = [
    `Hair: ${hair}`,
    `Facial structure: ${facialStructure}`,
    `Skin: ${skinDetail}`,
    `Expression: ${expression}`,
  ];

  if (gender === 'male') {
    variations.push(`Facial hair: ${facialHair}`);
  }

  variations.push(`Eyebrows: ${eyebrows}`);
  variations.push(`Nose: ${nose}`);
  variations.push(`Ears: ${ears}`);

  prompt += `\n\nSeeded variations: ${variations.join('; ')}.`;

  return prompt;
}
