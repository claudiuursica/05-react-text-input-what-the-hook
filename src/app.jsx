import React, { useState } from "react";
import { TextInputStale } from "./components/text-input-stale";
import { TextInput } from "./components/text-input";

import "./styles.css";

const generateRandomValue = () => Math.floor(Math.random() * 10000);

export default function App() {
  const [staleInputValue, setStaleInputValue] = useState(generateRandomValue());
  const [inputValue, setInputValue] = useState(generateRandomValue());

  const handleStaleInputUpdate = value => setStaleInputValue(value);
  const handleStaleButtonClick = () =>
    setStaleInputValue(generateRandomValue());

  const handleInputUpdate = value => setStaleInputValue(value);
  const handleButtonClick = () => setInputValue(generateRandomValue());

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Stale input no refresh</h1>
        <div>Parent state value: {staleInputValue}</div>
        <TextInputStale
          value={staleInputValue}
          onUpdate={handleStaleInputUpdate}
        />

        <button onClick={handleStaleButtonClick}>Update value</button>
      </div>

      <div className="wrapper">
        <h1>Input with refresh</h1>
        <div>Parent state value: {inputValue}</div>
        <TextInput value={inputValue} onUpdate={handleInputUpdate} />
        <button onClick={handleButtonClick}>Update value</button>
      </div>
    </div>
  );
}
