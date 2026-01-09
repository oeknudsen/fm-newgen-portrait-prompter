import { useState, useEffect } from 'react';
import { Region, Gender } from './types';
import { buildPrompt } from './utils/promptBuilder';
import { generateSeed } from './utils/seededRNG';
import './App.css';

const REGIONS: Region[] = [
  'Afroamerican',
  'Afrocaribbean',
  'AlbanianGreek',
  'Anglosphere',
  'ArabGulf',
  'Armenian',
  'Baltics',
  'BrazilMixed',
  'CaucasianNA',
  'Caucasus',
  'CentralAfrica',
  'CentralAsian',
  'CentralEurope',
  'China',
  'EastAfrica',
  'EastBalkan',
  'EastSlavic',
  'Filipino',
  'Finstonia',
  'France',
  'HornOfAfrica',
  'Hungary',
  'Iceland',
  'IndigenousSA',
  'Indonesia',
  'Iran',
  'Ireland',
  'Italia',
  'Japan',
  'Korea',
  'Maghreb',
  'MainlandSEA',
  'Malaysia',
  'Mashriq',
  'Mestizo',
  'MixedRace',
  'Mongolia',
  'Netherlands',
  'PacificIslanders',
  'Poland',
  'Portugal',
  'Romania',
  'SahelianAfrica',
  'Scandinavian',
  'Singapore',
  'SouthAsia',
  'SouthConeSA',
  'SouthernAfrica',
  'Spain',
  'Staff',
  'Turkish',
  'Uzbekistan',
  'Vietnam',
  'WestAfrica',
  'WestBalkan',
  'WestSlavic',
];

// Helper function to format region names for display
function formatRegionName(region: Region): string {
  // Handle special acronyms first
  const acronyms: Record<string, string> = {
    'NA': 'North America',
    'SA': 'South America',
    'SEA': 'Southeast Asia',
  };
  
  // Insert spaces before capital letters
  let formatted = region
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  
  // Replace known acronyms
  Object.entries(acronyms).forEach(([acronym, expansion]) => {
    formatted = formatted.replace(new RegExp(`\\b${acronym}\\b`, 'g'), expansion);
  });
  
  // Capitalize first letter
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function App() {
  const [region, setRegion] = useState<Region>('Scandinavian');
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<Gender>('male');
  const [seed, setSeed] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize seed on mount
  useEffect(() => {
    setSeed(generateSeed());
  }, []);

  // Regenerate prompt whenever region, age, gender, or seed changes
  useEffect(() => {
    if (seed) {
      const newPrompt = buildPrompt(region, age, gender, seed);
      setPrompt(newPrompt);
    }
  }, [region, age, gender, seed]);

  const handleNewSeed = () => {
    const newSeed = generateSeed();
    setSeed(newSeed);
    setCopied(false);
  };

  const handleGenerate = () => {
    const newPrompt = buildPrompt(region, age, gender, seed);
    setPrompt(newPrompt);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Football Regen Prompt Generator</h1>
        <p className="subtitle">Generate hyper-realistic headshot prompts with seeded variations</p>
      </header>

      <main className="main">
        <div className="controls">
          <div className="control-group">
            <label htmlFor="region">Region:</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {formatRegionName(r)}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              min="16"
              max="40"
              value={age}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (!isNaN(value) && value >= 16 && value <= 40) {
                  setAge(value);
                }
              }}
            />
          </div>

          <div className="control-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="control-group seed-display">
            <label>Current Seed:</label>
            <code className="seed-value">{seed || 'Generating...'}</code>
          </div>
        </div>

        <div className="actions">
          <button onClick={handleNewSeed} className="btn btn-secondary">
            New Seed
          </button>
          <button onClick={handleGenerate} className="btn btn-primary">
            Generate
          </button>
        </div>

        <div className="output-section">
          <div className="output-header">
            <label htmlFor="prompt-output">Generated Prompt:</label>
            <button
              onClick={handleCopy}
              className={`btn btn-copy ${copied ? 'copied' : ''}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <textarea
            id="prompt-output"
            className="prompt-output"
            value={prompt}
            readOnly
            rows={20}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
