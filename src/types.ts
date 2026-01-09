// Type definitions for the prompt generator

// Age is now a number input field
export type Age = number;

export type Gender = 'male' | 'female';

// Comprehensive list of all nationalities (sorted alphabetically)
export const ALL_NATIONALITIES: string[] = [
  'African American',
  'Albanian',
  'Algerian',
  'American',
  'Argentine',
  'Armenian',
  'Australian',
  'Austrian',
  'Azerbaijani',
  'Aymara',
  'Bahraini',
  'Bangladeshi',
  'Barbadian',
  'Belarusian',
  'Black American',
  'Bosnian',
  'Botswanan',
  'Brazilian',
  'Bulgarian',
  'Burkina Faso',
  'Burundian',
  'Cambodian',
  'Cameroonian',
  'Canadian',
  'Central African',
  'Chadian',
  'Chechen',
  'Chilean',
  'Chinese',
  'Colombian',
  'Congolese',
  'Croatian',
  'Czech',
  'Dagestani',
  'Danish',
  'Djiboutian',
  'Dutch',
  'Ecuadorian',
  'Emirati',
  'English',
  'Equatorial Guinean',
  'Eritrean',
  'Estonian',
  'Ethiopian',
  'Fijian',
  'Filipino',
  'Finnish',
  'French',
  'Gabonese',
  'Georgian',
  'German',
  'Ghanaian',
  'Greek',
  'Guarani',
  'Guinean',
  'Guyanese',
  'Haitian',
  'Hungarian',
  'Icelandic',
  'Indian',
  'Indigenous South American',
  'Indonesian',
  'Iranian',
  'Irish',
  'Italian',
  'Ivorian',
  'Jamaican',
  'Japanese',
  'Jordanian',
  'Kazakh',
  'Kenyan',
  'Korean',
  'Kuwaiti',
  'Kyrgyz',
  'Laotian',
  'Latvian',
  'Lebanese',
  'Libyan',
  'Lithuanian',
  'Malaysian',
  'Malian',
  'Mauritanian',
  'Mestizo',
  'Mixed Latin American',
  'Mixed Race',
  'Moldovan',
  'Montenegrin',
  'Mongolian',
  'Multiracial',
  'Myanmar',
  'Namibian',
  'Nepalese',
  'New Zealander',
  'Nigerian',
  'Nigerien',
  'North Korean',
  'North Macedonian',
  'Norwegian',
  'Omani',
  'Palestinian',
  'Papua New Guinean',
  'Paraguayan',
  'Persian',
  'Peruvian',
  'Polish',
  'Portuguese',
  'Qatari',
  'Quechua',
  'Romanian',
  'Russian',
  'Rwandan',
  'Samoan',
  'Saudi Arabian',
  'Scottish',
  'Senegalese',
  'Serbian',
  'Sierra Leonean',
  'Singaporean',
  'Slovak',
  'Slovenian',
  'Solomon Islander',
  'Somali',
  'South African',
  'South Korean',
  'Spanish',
  'Sri Lankan',
  'Staff',
  'Swedish',
  'Swiss',
  'Syrian',
  'Tajik',
  'Tanzanian',
  'Thai',
  'Tongan',
  'Trinidadian',
  'Tunisian',
  'Turkish',
  'Turkmen',
  'Ugandan',
  'Ukrainian',
  'Uruguayan',
  'Uzbek',
  'Vietnamese',
  'Welsh',
  'White American',
  'White Canadian',
  'Zimbabwean',
].sort();

// Hair options by gender
export const HAIR_OPTIONS_MALE = [
  'short fade',
  'buzz cut',
  'curly crop',
  'textured fringe',
  'classic side part',
  'messy medium',
  'undercut',
  'french crop',
  'quiff',
  'slicked back',
  'afro',
  'dreadlocks',
  'braids',
  'long curly',
  'long straight',
  'mohawk',
  'fade with design',
  'pompadour',
  'crew cut',
  'shaggy medium',
] as const;

export const HAIR_OPTIONS_FEMALE = [
  'tied-back ponytail',
  'low bun',
  'shoulder-length straight',
  'wavy medium',
  'short bob',
  'slicked-back',
  'high ponytail',
  'braided ponytail',
  'french braid',
  'space buns',
  'pixie cut',
  'long straight',
  'long wavy',
  'curly long',
  'shoulder-length wavy',
  'bob with bangs',
  'lob',
  'braids',
  'cornrows',
  'afro',
] as const;

// Nationality groups for hair style mapping
export type NationalityGroup =
  | 'African'
  | 'AfricanDiaspora'
  | 'Asian'
  | 'European'
  | 'MiddleEastern'
  | 'LatinAmerican'
  | 'Indigenous'
  | 'Pacific'
  | 'Mixed'
  | 'Universal';

// Map nationalities to groups
export const NATIONALITY_GROUPS: Record<string, NationalityGroup[]> = {
  // African
  'Nigerian': ['African', 'AfricanDiaspora'],
  'Ghanaian': ['African', 'AfricanDiaspora'],
  'Senegalese': ['African', 'AfricanDiaspora'],
  'Ivorian': ['African', 'AfricanDiaspora'],
  'Guinean': ['African', 'AfricanDiaspora'],
  'Sierra Leonean': ['African', 'AfricanDiaspora'],
  'Cameroonian': ['African'],
  'Congolese': ['African'],
  'Central African': ['African'],
  'Gabonese': ['African'],
  'Equatorial Guinean': ['African'],
  'Chadian': ['African'],
  'Malian': ['African'],
  'Nigerien': ['African'],
  'Burkina Faso': ['African'],
  'Mauritanian': ['African'],
  'Kenyan': ['African'],
  'Tanzanian': ['African'],
  'Ugandan': ['African'],
  'Rwandan': ['African'],
  'Burundian': ['African'],
  'Ethiopian': ['African'],
  'Eritrean': ['African'],
  'Somali': ['African'],
  'Djiboutian': ['African'],
  'South African': ['African', 'Mixed'],
  'Namibian': ['African'],
  'Botswanan': ['African'],
  'Zimbabwean': ['African'],

  // African Diaspora
  'African American': ['AfricanDiaspora', 'Mixed'],
  'Black American': ['AfricanDiaspora', 'Mixed'],
  'Jamaican': ['AfricanDiaspora'],
  'Haitian': ['AfricanDiaspora'],
  'Trinidadian': ['AfricanDiaspora', 'Mixed'],
  'Barbadian': ['AfricanDiaspora'],
  'Guyanese': ['AfricanDiaspora', 'Mixed'],

  // Asian
  'Chinese': ['Asian'],
  'Japanese': ['Asian'],
  'Korean': ['Asian'],
  'North Korean': ['Asian'],
  'South Korean': ['Asian'],
  'Vietnamese': ['Asian'],
  'Thai': ['Asian'],
  'Cambodian': ['Asian'],
  'Laotian': ['Asian'],
  'Myanmar': ['Asian'],
  'Filipino': ['Asian'],
  'Indonesian': ['Asian'],
  'Malaysian': ['Asian'],
  'Singaporean': ['Asian'],
  'Indian': ['Asian'],
  'Pakistani': ['Asian'],
  'Bangladeshi': ['Asian'],
  'Sri Lankan': ['Asian'],
  'Nepalese': ['Asian'],

  // Middle Eastern
  'Saudi Arabian': ['MiddleEastern'],
  'Emirati': ['MiddleEastern'],
  'Qatari': ['MiddleEastern'],
  'Kuwaiti': ['MiddleEastern'],
  'Bahraini': ['MiddleEastern'],
  'Omani': ['MiddleEastern'],
  'Iranian': ['MiddleEastern'],
  'Persian': ['MiddleEastern'],
  'Iraqi': ['MiddleEastern'],
  'Lebanese': ['MiddleEastern'],
  'Syrian': ['MiddleEastern'],
  'Jordanian': ['MiddleEastern'],
  'Palestinian': ['MiddleEastern'],
  'Turkish': ['MiddleEastern'],

  // European
  'English': ['European'],
  'Scottish': ['European'],
  'Welsh': ['European'],
  'Irish': ['European'],
  'French': ['European'],
  'German': ['European'],
  'Italian': ['European'],
  'Spanish': ['European'],
  'Portuguese': ['European'],
  'Dutch': ['European'],
  'Belgian': ['European'],
  'Swiss': ['European'],
  'Austrian': ['European'],
  'Polish': ['European'],
  'Czech': ['European'],
  'Slovak': ['European'],
  'Hungarian': ['European'],
  'Romanian': ['European'],
  'Bulgarian': ['European'],
  'Greek': ['European'],
  'Albanian': ['European'],
  'Croatian': ['European'],
  'Serbian': ['European'],
  'Bosnian': ['European'],
  'Slovenian': ['European'],
  'Montenegrin': ['European'],
  'North Macedonian': ['European'],
  'Russian': ['European'],
  'Ukrainian': ['European'],
  'Belarusian': ['European'],
  'Moldovan': ['European'],
  'Norwegian': ['European'],
  'Swedish': ['European'],
  'Danish': ['European'],
  'Finnish': ['European'],
  'Icelandic': ['European'],
  'Estonian': ['European'],
  'Latvian': ['European'],
  'Lithuanian': ['European'],

  // Latin American
  'Brazilian': ['LatinAmerican', 'Mixed'],
  'Argentine': ['LatinAmerican'],
  'Chilean': ['LatinAmerican'],
  'Uruguayan': ['LatinAmerican'],
  'Paraguayan': ['LatinAmerican'],
  'Colombian': ['LatinAmerican'],
  'Peruvian': ['LatinAmerican'],
  'Ecuadorian': ['LatinAmerican'],
  'Mestizo': ['LatinAmerican', 'Mixed'],
  'Mixed Latin American': ['LatinAmerican', 'Mixed'],

  // Indigenous
  'Indigenous South American': ['Indigenous'],
  'Quechua': ['Indigenous'],
  'Aymara': ['Indigenous'],
  'Guarani': ['Indigenous'],

  // Pacific
  'Fijian': ['Pacific'],
  'Samoan': ['Pacific'],
  'Tongan': ['Pacific'],
  'Papua New Guinean': ['Pacific'],
  'Solomon Islander': ['Pacific'],
  'Australian': ['Pacific'],
  'New Zealander': ['Pacific'],

  // Mixed/Multiracial
  'Mixed Race': ['Mixed', 'Universal'],
  'Multiracial': ['Mixed', 'Universal'],

  // Central Asian / Caucasus
  'Kazakh': ['MiddleEastern'],
  'Uzbek': ['MiddleEastern'],
  'Kyrgyz': ['MiddleEastern'],
  'Tajik': ['MiddleEastern'],
  'Turkmen': ['MiddleEastern'],
  'Georgian': ['MiddleEastern'],
  'Azerbaijani': ['MiddleEastern'],
  'Chechen': ['MiddleEastern'],
  'Dagestani': ['MiddleEastern'],
  'Mongolian': ['Asian'],

  // North African
  'Moroccan': ['MiddleEastern'],
  'Algerian': ['MiddleEastern'],
  'Tunisian': ['MiddleEastern'],
  'Libyan': ['MiddleEastern'],
  'Egyptian': ['MiddleEastern'],

  // North American
  'American': ['Universal'],
  'Canadian': ['Universal'],
  'White American': ['European', 'Universal'],
  'White Canadian': ['European', 'Universal'],

  // Staff / Generic
  'Staff': ['Universal'],
};

// Hair style mappings by nationality group
export const HAIR_BY_GROUP_MALE: Record<NationalityGroup, readonly string[]> = {
  African: [
    'afro',
    'dreadlocks',
    'braids',
    'short fade',
    'buzz cut',
    'curly crop',
    'fade with design',
    'shaggy medium',
  ],
  AfricanDiaspora: [
    'afro',
    'dreadlocks',
    'braids',
    'short fade',
    'buzz cut',
    'curly crop',
    'fade with design',
    'textured fringe',
    'undercut',
    'shaggy medium',
  ],
  Asian: [
    'short fade',
    'buzz cut',
    'textured fringe',
    'classic side part',
    'messy medium',
    'undercut',
    'french crop',
    'quiff',
    'slicked back',
    'crew cut',
    'shaggy medium',
    'long straight',
    'long curly',
  ],
  European: [
    'short fade',
    'buzz cut',
    'classic side part',
    'messy medium',
    'undercut',
    'french crop',
    'quiff',
    'slicked back',
    'pompadour',
    'crew cut',
    'shaggy medium',
    'mohawk',
  ],
  MiddleEastern: [
    'short fade',
    'buzz cut',
    'classic side part',
    'messy medium',
    'undercut',
    'french crop',
    'quiff',
    'slicked back',
    'crew cut',
    'shaggy medium',
    'long curly',
    'long straight',
  ],
  LatinAmerican: [
    'short fade',
    'buzz cut',
    'curly crop',
    'textured fringe',
    'classic side part',
    'messy medium',
    'undercut',
    'french crop',
    'quiff',
    'shaggy medium',
    'long curly',
  ],
  Indigenous: [
    'long straight',
    'long curly',
    'braids',
    'shaggy medium',
    'messy medium',
  ],
  Pacific: [
    'short fade',
    'buzz cut',
    'textured fringe',
    'messy medium',
    'shaggy medium',
    'long curly',
    'braids',
  ],
  Mixed: [
    'short fade',
    'buzz cut',
    'curly crop',
    'textured fringe',
    'classic side part',
    'messy medium',
    'undercut',
    'french crop',
    'quiff',
    'shaggy medium',
    'afro',
    'braids',
  ],
  Universal: HAIR_OPTIONS_MALE,
};

export const HAIR_BY_GROUP_FEMALE: Record<NationalityGroup, readonly string[]> = {
  African: [
    'afro',
    'braids',
    'cornrows',
    'braided ponytail',
    'french braid',
    'high ponytail',
    'tied-back ponytail',
    'low bun',
  ],
  AfricanDiaspora: [
    'afro',
    'braids',
    'cornrows',
    'braided ponytail',
    'french braid',
    'high ponytail',
    'tied-back ponytail',
    'low bun',
    'slicked-back',
    'shoulder-length wavy',
  ],
  Asian: [
    'tied-back ponytail',
    'low bun',
    'high ponytail',
    'shoulder-length straight',
    'long straight',
    'long wavy',
    'short bob',
    'bob with bangs',
    'lob',
    'pixie cut',
    'space buns',
  ],
  European: [
    'tied-back ponytail',
    'low bun',
    'high ponytail',
    'shoulder-length straight',
    'shoulder-length wavy',
    'wavy medium',
    'long straight',
    'long wavy',
    'curly long',
    'short bob',
    'bob with bangs',
    'lob',
    'pixie cut',
    'slicked-back',
    'french braid',
  ],
  MiddleEastern: [
    'tied-back ponytail',
    'low bun',
    'high ponytail',
    'shoulder-length straight',
    'long straight',
    'long wavy',
    'curly long',
    'short bob',
    'bob with bangs',
    'braided ponytail',
    'french braid',
  ],
  LatinAmerican: [
    'tied-back ponytail',
    'low bun',
    'high ponytail',
    'shoulder-length straight',
    'shoulder-length wavy',
    'wavy medium',
    'long straight',
    'long wavy',
    'curly long',
    'short bob',
    'braided ponytail',
    'french braid',
  ],
  Indigenous: [
    'long straight',
    'long wavy',
    'braids',
    'braided ponytail',
    'french braid',
    'tied-back ponytail',
  ],
  Pacific: [
    'tied-back ponytail',
    'high ponytail',
    'braided ponytail',
    'french braid',
    'long wavy',
    'curly long',
    'braids',
  ],
  Mixed: [
    'tied-back ponytail',
    'low bun',
    'high ponytail',
    'shoulder-length straight',
    'shoulder-length wavy',
    'wavy medium',
    'long straight',
    'long wavy',
    'curly long',
    'short bob',
    'braided ponytail',
    'french braid',
    'braids',
    'afro',
  ],
  Universal: HAIR_OPTIONS_FEMALE,
};

/**
 * Get appropriate hair options for a nationality
 * @param nationality - The nationality string
 * @param gender - The gender
 * @returns Array of hair style options
 */
export function getHairOptionsForNationality(
  nationality: string,
  gender: Gender
): readonly string[] {
  const groups = NATIONALITY_GROUPS[nationality] || ['Universal'];
  
  // Combine hair options from all groups the nationality belongs to
  const hairSets = groups.map((group) =>
    gender === 'male' ? HAIR_BY_GROUP_MALE[group] : HAIR_BY_GROUP_FEMALE[group]
  );
  
  // Merge and deduplicate
  const combined = new Set<string>();
  hairSets.forEach((set) => {
    set.forEach((style) => combined.add(style));
  });
  
  return Array.from(combined);
}

/**
 * Get hair options when multiple nationalities are selected
 * Uses the first nationality's groups, or combines if both have specific groups
 */
export function getHairOptionsForNationalities(
  nationality: string,
  secondNationality: string | null,
  gender: Gender
): readonly string[] {
  const primaryOptions = getHairOptionsForNationality(nationality, gender);
  
  if (!secondNationality || secondNationality.trim() === '') {
    return primaryOptions;
  }
  
  const secondaryOptions = getHairOptionsForNationality(secondNationality, gender);
  
  // Combine both sets (intersection or union - using union for more variety)
  const combined = new Set<string>();
  primaryOptions.forEach((style) => combined.add(style));
  secondaryOptions.forEach((style) => combined.add(style));
  
  return Array.from(combined);
}

// Facial hair options (male only)
export const FACIAL_HAIR_OPTIONS = [
  'clean-shaven',
  'light stubble',
  'short beard',
  'trimmed goatee',
  'medium stubble',
  'full beard',
  'stubble beard',
  'van dyke',
  'moustache only',
  'soul patch',
  'extended goatee',
  'anchor beard',
  'chinstrap',
  'mutton chops',
  'circle beard',
] as const;

// Expression options (database style)
export const EXPRESSION_OPTIONS = [
  'neutral and calm',
  'neutral with slight intensity',
  'calm, focused, mouth closed',
  'subtle confident look, no smile',
  'serious and composed',
  'determined expression',
  'relaxed neutral',
  'professional neutral',
  'slight intensity, eyes focused',
  'calm with subtle determination',
  'stoic expression',
  'composed and steady',
  'neutral with slight alertness',
  'focused gaze, mouth closed',
  'calm professional expression',
] as const;

// Facial structure options
export const FACIAL_STRUCTURE_OPTIONS = [
  'lean defined jawline',
  'more oval face',
  'slightly wider jaw',
  'prominent cheekbones',
  'narrower chin',
] as const;

// Skin detail options
export const SKIN_DETAIL_OPTIONS = [
  'pores + mild blemishes',
  'visible freckles',
  'mild acne',
  'under-eye texture',
  'slight redness around nose/cheeks',
] as const;

// Eyebrow options
export const EYEBROW_OPTIONS = ['thin', 'medium', 'thick'] as const;

// Nose shape options
export const NOSE_OPTIONS = ['straight', 'slightly curved', 'narrow', 'broad'] as const;

// Ear prominence options
export const EAR_OPTIONS = ['subtle', 'moderate', 'prominent'] as const;
