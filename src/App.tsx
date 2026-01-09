import { useState, useEffect } from 'react';
import { Gender, ALL_NATIONALITIES } from './types';
import { buildPrompt } from './utils/promptBuilder';
import { generateSeed } from './utils/seededRNG';
import './App.css';

function App() {
  const [nationality, setNationality] = useState<string>('Spanish');
  const [secondNationality, setSecondNationality] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<Gender>('male');
  const [seed, setSeed] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize seed on mount
  useEffect(() => {
    setSeed(generateSeed());
  }, []);

  // Regenerate prompt whenever nationality, secondNationality, region, age, gender, or seed changes
  useEffect(() => {
    if (seed && nationality) {
      const newPrompt = buildPrompt(
        nationality,
        secondNationality || null,
        age,
        gender,
        region || null,
        seed
      );
      setPrompt(newPrompt);
    }
  }, [nationality, secondNationality, region, age, gender, seed]);

  const handleNewSeed = () => {
    const newSeed = generateSeed();
    setSeed(newSeed);
    setCopied(false);
  };

  const handleGenerate = () => {
    const newPrompt = buildPrompt(
      nationality,
      secondNationality || null,
      age,
      gender,
      region || null,
      seed
    );
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
            <label htmlFor="nationality">Nationality:</label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              {ALL_NATIONALITIES.map((nat) => (
                <option key={nat} value={nat}>
                  {nat}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="secondNationality">Second Nationality (optional):</label>
            <select
              id="secondNationality"
              value={secondNationality}
              onChange={(e) => setSecondNationality(e.target.value)}
            >
              <option value="">None</option>
              {ALL_NATIONALITIES.map((nat) => (
                <option key={nat} value={nat}>
                  {nat}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="region">Region (optional):</label>
            <input
              id="region"
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="e.g., Iberia, Scandinavia"
            />
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
