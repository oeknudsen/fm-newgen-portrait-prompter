/**
 * Prompt builder for football regen headshot prompts
 * Generates deterministic prompts based on user selections and seed
 */

import {
  Gender,
  EXPRESSION_OPTIONS,
  FACIAL_STRUCTURE_OPTIONS,
  EYEBROW_OPTIONS,
  NOSE_OPTIONS,
  EAR_OPTIONS,
  getHairOptionsForNationalities,
  getFacialHairOptionsForNationalities,
  getSkinDetailOptionsForNationalities,
  YOUNG_FACIAL_HAIR_MAX_AGE,
  LIGHT_FACIAL_HAIR_STYLES,
  MINOR_FACIAL_HAIR_MAX_AGE,
  MINOR_FACIAL_HAIR_STYLES,
} from '../types';
import { createSeededRNG, pickOne } from './seededRNG';

// Base prompt template
const BASE_PROMPT = `Create a hyper-realistic professional football player headshot portrait of a
young {{NATIONALITY}} {{GENDER_FOOTBALLER}} ({{AGE_RANGE}}){{REGION_TEXT}}.

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
 * @param nationality - Selected nationality
 * @param secondNationality - Optional second nationality
 * @param age - Selected age (number)
 * @param gender - Selected gender
 * @param region - Optional region text
 * @param seed - Seed string for deterministic randomization
 * @returns Complete prompt string
 */
export function buildPrompt(
  nationality: string,
  secondNationality: string | null,
  age: number,
  gender: Gender,
  region: string | null,
  seed: string
): string {
  // Create seeded RNG
  const rng = createSeededRNG(seed);

  // Build nationality string: "Nationality" or "Nationality-SecondNationality"
  let nationalityText = nationality;
  if (secondNationality && secondNationality.trim() !== '') {
    nationalityText = `${nationality}-${secondNationality}`;
  }

  // Build region text if provided
  let regionText = '';
  if (region && region.trim() !== '') {
    regionText = ` from ${region.trim()}`;
  }

  // Select gender-appropriate hair style based on nationality
  const hairOptions = getHairOptionsForNationalities(
    nationality,
    secondNationality,
    gender
  );
  const hair = pickOne(hairOptions, rng);

  // Select facial hair (male only), filtered by nationality group; minimal for under-18, lighter for young
  let facialHairOptions = gender === 'male'
    ? getFacialHairOptionsForNationalities(nationality, secondNationality)
    : [];
  if (gender === 'male' && facialHairOptions.length > 0) {
    if (age <= MINOR_FACIAL_HAIR_MAX_AGE) {
      const minorSet = new Set(MINOR_FACIAL_HAIR_STYLES);
      const minorOptions = facialHairOptions.filter((style) => minorSet.has(style));
      facialHairOptions = minorOptions.length > 0 ? minorOptions : [...MINOR_FACIAL_HAIR_STYLES];
    } else if (age <= YOUNG_FACIAL_HAIR_MAX_AGE) {
      const lightSet = new Set(LIGHT_FACIAL_HAIR_STYLES);
      const youngOptions = facialHairOptions.filter((style) => lightSet.has(style));
      facialHairOptions = youngOptions.length > 0 ? youngOptions : ['clean-shaven', 'light stubble'];
    }
  }
  const facialHair = facialHairOptions.length > 0 ? pickOne(facialHairOptions, rng) : null;

  // Select expression
  const expression = pickOne(EXPRESSION_OPTIONS, rng);

  // Select facial structure
  const facialStructure = pickOne(FACIAL_STRUCTURE_OPTIONS, rng);

  // Select skin details by nationality group
  const skinDetailOptions = getSkinDetailOptionsForNationalities(nationality, secondNationality);
  const skinDetail = pickOne(skinDetailOptions, rng);

  // Select extras
  const eyebrows = pickOne(EYEBROW_OPTIONS, rng);
  const nose = pickOne(NOSE_OPTIONS, rng);
  const ears = pickOne(EAR_OPTIONS, rng);

  // Build facial hair line
  let facialHairLine: string;
  if (gender === 'male') {
    if (facialHair === 'clean-shaven') {
      facialHairLine = 'Facial hair is clean-shaven.';
    } else {
      // Handle all other facial hair styles generically
      facialHairLine = `Facial hair is natural where appropriate (${facialHair}).`;
    }
  } else {
    facialHairLine = 'No facial hair.';
  }

  // Replace placeholders in base prompt and blend seeded variations
  const genderFootballer = gender === 'male' ? 'male footballer' : 'female footballer';
  let prompt = BASE_PROMPT
    .replace('{{NATIONALITY}}', nationalityText)
    .replace('{{AGE_RANGE}}', age.toString())
    .replace('{{GENDER_FOOTBALLER}}', genderFootballer)
    .replace('{{REGION_TEXT}}', regionText)
    .replace('{{FACIAL_HAIR_LINE}}', facialHairLine);

  // Blend expression into the prompt (omit "mouth closed, no smile" for smiling expressions)
  const isSmilingExpression = expression.toLowerCase().includes('smile');
  const expressionLine = isSmilingExpression
    ? `Expression is ${expression}.`
    : `Expression is ${expression}, mouth closed, no smile.`;
  prompt = prompt.replace(
    'Expression is neutral and calm, mouth closed, no smile.',
    expressionLine
  );

  // Blend hair style into the prompt
  prompt = prompt.replace(
    'Hair is natural and realistic, styled like a professional footballer,\nwith visible strand detail.',
    `Hair is natural and realistic, styled like a professional footballer (${hair}),\nwith visible strand detail.`
  );

  // Blend skin details into the prompt
  prompt = prompt.replace(
    'Skin texture is highly realistic with visible pores, freckles, light acne,\nnatural blemishes, and subtle facial asymmetry.',
    `Skin texture is highly realistic with ${skinDetail},\nnatural blemishes, and subtle facial asymmetry.`
  );

  // Blend facial structure into the prompt (add after the subject description)
  prompt = prompt.replace(
    'The subject is photographed from the shoulders up, facing directly toward the camera,\ncentered and symmetrical.',
    `The subject is photographed from the shoulders up, facing directly toward the camera,\ncentered and symmetrical.\nFacial structure features ${facialStructure}.`
  );

  // Blend eyebrow, nose, and ear details into the prompt (add after facial structure or in a natural place)
  const facialFeatures = `Eyebrows are ${eyebrows}. Nose is ${nose}. Ears are ${ears} in prominence.`;
  
  // Insert facial features after facial structure
  prompt = prompt.replace(
    `Facial structure features ${facialStructure}.`,
    `Facial structure features ${facialStructure}.\n${facialFeatures}`
  );

  return prompt;
}
