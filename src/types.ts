// Type definitions for the prompt generator

export type Region =
  | 'Afroamerican'
  | 'Afrocaribbean'
  | 'AlbanianGreek'
  | 'Anglosphere'
  | 'ArabGulf'
  | 'Armenian'
  | 'Baltics'
  | 'BrazilMixed'
  | 'CaucasianNA'
  | 'Caucasus'
  | 'CentralAfrica'
  | 'CentralAsian'
  | 'CentralEurope'
  | 'China'
  | 'EastAfrica'
  | 'EastBalkan'
  | 'EastSlavic'
  | 'Filipino'
  | 'Finstonia'
  | 'France'
  | 'HornOfAfrica'
  | 'Hungary'
  | 'Iceland'
  | 'IndigenousSA'
  | 'Indonesia'
  | 'Iran'
  | 'Ireland'
  | 'Italia'
  | 'Japan'
  | 'Korea'
  | 'Maghreb'
  | 'MainlandSEA'
  | 'Malaysia'
  | 'Mashriq'
  | 'Mestizo'
  | 'MixedRace'
  | 'Mongolia'
  | 'Netherlands'
  | 'PacificIslanders'
  | 'Poland'
  | 'Portugal'
  | 'Romania'
  | 'SahelianAfrica'
  | 'Scandinavian'
  | 'Singapore'
  | 'SouthAsia'
  | 'SouthConeSA'
  | 'SouthernAfrica'
  | 'Spain'
  | 'Staff'
  | 'Turkish'
  | 'Uzbekistan'
  | 'Vietnam'
  | 'WestAfrica'
  | 'WestBalkan'
  | 'WestSlavic';

// Age is now a number input field
export type Age = number;

export type Gender = 'male' | 'female';

// Region to nationalities mapping
export const REGION_NATIONALITIES: Record<Region, string[]> = {
  'Afroamerican': ['African American', 'Black American'],
  'Afrocaribbean': ['Jamaican', 'Haitian', 'Trinidadian', 'Barbadian', 'Guyanese'],
  'AlbanianGreek': ['Albanian', 'Greek'],
  'Anglosphere': ['English', 'American', 'Australian', 'Canadian', 'New Zealander', 'Scottish', 'Welsh'],
  'ArabGulf': ['Saudi Arabian', 'Emirati', 'Qatari', 'Kuwaiti', 'Bahraini', 'Omani'],
  'Armenian': ['Armenian'],
  'Baltics': ['Estonian', 'Latvian', 'Lithuanian'],
  'BrazilMixed': ['Brazilian'],
  'CaucasianNA': ['White American', 'White Canadian'],
  'Caucasus': ['Georgian', 'Azerbaijani', 'Chechen', 'Dagestani'],
  'CentralAfrica': ['Central African', 'Congolese', 'Cameroonian', 'Gabonese', 'Equatorial Guinean'],
  'CentralAsian': ['Kazakh', 'Uzbek', 'Kyrgyz', 'Tajik', 'Turkmen'],
  'CentralEurope': ['German', 'Austrian', 'Swiss', 'Czech', 'Slovak'],
  'China': ['Chinese'],
  'EastAfrica': ['Kenyan', 'Tanzanian', 'Ugandan', 'Rwandan', 'Burundian'],
  'EastBalkan': ['Bulgarian', 'Romanian', 'Moldovan'],
  'EastSlavic': ['Russian', 'Ukrainian', 'Belarusian'],
  'Filipino': ['Filipino'],
  'Finstonia': ['Finnish', 'Estonian'],
  'France': ['French'],
  'HornOfAfrica': ['Somali', 'Eritrean', 'Djiboutian', 'Ethiopian'],
  'Hungary': ['Hungarian'],
  'Iceland': ['Icelandic'],
  'IndigenousSA': ['Indigenous South American', 'Quechua', 'Aymara', 'Guarani'],
  'Indonesia': ['Indonesian'],
  'Iran': ['Iranian', 'Persian'],
  'Ireland': ['Irish'],
  'Italia': ['Italian'],
  'Japan': ['Japanese'],
  'Korea': ['Korean', 'South Korean', 'North Korean'],
  'Maghreb': ['Moroccan', 'Algerian', 'Tunisian', 'Libyan'],
  'MainlandSEA': ['Thai', 'Vietnamese', 'Cambodian', 'Laotian', 'Myanmar'],
  'Malaysia': ['Malaysian'],
  'Mashriq': ['Lebanese', 'Syrian', 'Jordanian', 'Palestinian', 'Iraqi'],
  'Mestizo': ['Mestizo', 'Mixed Latin American'],
  'MixedRace': ['Mixed Race', 'Multiracial'],
  'Mongolia': ['Mongolian'],
  'Netherlands': ['Dutch'],
  'PacificIslanders': ['Fijian', 'Samoan', 'Tongan', 'Papua New Guinean', 'Solomon Islander'],
  'Poland': ['Polish'],
  'Portugal': ['Portuguese'],
  'Romania': ['Romanian'],
  'SahelianAfrica': ['Malian', 'Nigerien', 'Chadian', 'Burkina Faso', 'Mauritanian'],
  'Scandinavian': ['Norwegian', 'Swedish', 'Danish', 'Finnish'],
  'Singapore': ['Singaporean'],
  'SouthAsia': ['Indian', 'Pakistani', 'Bangladeshi', 'Sri Lankan', 'Nepalese'],
  'SouthConeSA': ['Argentine', 'Chilean', 'Uruguayan', 'Paraguayan'],
  'SouthernAfrica': ['South African', 'Namibian', 'Botswanan', 'Zimbabwean'],
  'Spain': ['Spanish'],
  'Staff': ['Staff', 'Generic'],
  'Turkish': ['Turkish'],
  'Uzbekistan': ['Uzbek'],
  'Vietnam': ['Vietnamese'],
  'WestAfrica': ['Nigerian', 'Ghanaian', 'Senegalese', 'Ivorian', 'Guinean', 'Sierra Leonean'],
  'WestBalkan': ['Serbian', 'Croatian', 'Bosnian', 'Slovenian', 'Montenegrin', 'North Macedonian'],
  'WestSlavic': ['Polish', 'Czech', 'Slovak'],
};

// Hair options by gender
export const HAIR_OPTIONS_MALE = [
  'short fade',
  'buzz cut',
  'curly crop',
  'textured fringe',
  'classic side part',
  'messy medium',
] as const;

export const HAIR_OPTIONS_FEMALE = [
  'tied-back ponytail',
  'low bun',
  'shoulder-length straight',
  'wavy medium',
  'short bob',
  'slicked-back',
] as const;

// Facial hair options (male only)
export const FACIAL_HAIR_OPTIONS = [
  'clean-shaven',
  'light stubble',
  'short beard',
  'trimmed goatee',
] as const;

// Expression options (database style)
export const EXPRESSION_OPTIONS = [
  'neutral and calm',
  'neutral with slight intensity',
  'calm, focused, mouth closed',
  'subtle confident look, no smile',
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
