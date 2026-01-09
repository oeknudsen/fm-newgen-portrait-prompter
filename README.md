# Football Regen Prompt Generator

A React + TypeScript single-page web application that generates deterministic, seed-based prompts for hyper-realistic football regen headshots. Perfect for creating consistent, culturally appropriate portrait prompts for AI image generation.

## Features

- **Nationality Selection**: Choose primary and optional second nationality (e.g., "Spanish-Portuguese")
- **Region Input**: Optional text field to specify geographic region
- **Age Input**: Number input field (16-40 years)
- **Gender Selection**: Male or female options
- **Seed-Based Generation**: Deterministic randomization - same seed + same inputs = same output
- **Cultural Hair Mapping**: Hair styles automatically filtered based on nationality for cultural accuracy
- **Comprehensive Variations**: 
  - 20+ male hair styles
  - 20+ female hair styles
  - 15 facial hair options (male)
  - 15 expression variations
  - Facial structure, skin details, and more
- **One-Click Copy**: Copy generated prompts to clipboard instantly
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fm-newgen-face-prompt-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Usage

1. **Select Nationality**: Choose a primary nationality from the dropdown
2. **Optional Second Nationality**: Select a second nationality for dual-heritage prompts (e.g., "Spanish-Portuguese")
3. **Optional Region**: Type a region name (e.g., "Iberia", "Scandinavia")
4. **Set Age**: Enter age between 16-40
5. **Choose Gender**: Select male or female
6. **Generate**: The prompt auto-generates when you change any setting
7. **New Seed**: Click "New Seed" to generate a new random seed and create different variations
8. **Copy**: Click "Copy" to copy the generated prompt to your clipboard

## How It Works

### Seed-Based Determinism

The app uses a seeded pseudo-random number generator (mulberry32 algorithm) to ensure:
- **Same seed + same inputs = same output**
- Changing region/age/gender regenerates with the same seed
- New seed button creates a completely new set of variations

### Nationality-Based Hair Mapping

Hair styles are automatically filtered based on the selected nationality:

- **African/African Diaspora**: afro, dreadlocks, braids, cornrows, short fade, etc.
- **Asian**: short fade, textured fringe, classic side part, long straight, etc.
- **European**: classic side part, quiff, pompadour, slicked back, etc.
- **Middle Eastern**: Similar to European with regional variations
- **Latin American**: Mix of European and textured styles
- **Mixed/Multiracial**: All styles available

When dual nationality is selected, hair options from both nationalities are combined.

### Prompt Structure

The generated prompt includes:

1. **Base Prompt**: Professional football headshot description with placeholders
2. **Nationality**: Single or hyphenated (e.g., "Spanish-Portuguese")
3. **Region**: Optional " from [region]" text
4. **Seeded Variations**: Deterministic selections for:
   - Hair style
   - Facial structure
   - Skin details
   - Expression
   - Facial hair (male only)
   - Eyebrows, nose, ears

## Project Structure

```
fm-newgen-face-prompt-generator/
├── src/
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   ├── types.ts             # TypeScript types and mappings
│   └── utils/
│       ├── promptBuilder.ts # Prompt generation logic
│       └── seededRNG.ts     # Seeded PRNG implementation
├── index.html               # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS** - Styling (no external UI libraries)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Features in Detail

### Nationality Options
- 150+ nationalities available
- Supports dual nationality with hyphenated format
- Automatic hair style filtering based on cultural groups

### Hair Styles
- **Male**: 20 options (short fade, buzz cut, afro, dreadlocks, braids, etc.)
- **Female**: 20 options (ponytail, bun, braids, cornrows, afro, etc.)

### Facial Hair (Male Only)
- 15 options (clean-shaven, stubble, various beard styles, moustache, etc.)

### Expressions
- 15 database-style expressions (neutral, focused, determined, etc.)
- All expressions maintain professional headshot style (no smiles)

### Other Variations
- Facial structure (5 options)
- Skin details (5 options)
- Eyebrows, nose shape, ear prominence

## License

Private project - All rights reserved
