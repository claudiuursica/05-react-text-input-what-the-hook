import React, { useState } from "react";
import { TextInputStale } from "./components/text-input-stale";
import { TextInput } from "./components/text-input";

import "./styles.css";

const generateRandomValue = () => Math.floor(Math.random() * 10000);

export default function App() {
  const [staleInputValue, setStaleInputValue] = useState({
    value: generateRandomValue(),
    generatedBy: "random"
  });
  const [inputValue, setInputValue] = useState({
    value: generateRandomValue(),
    generatedBy: "random"
  });

  const handleStaleInputUpdate = value =>
    setStaleInputValue({
      value,
      generatedBy: "textInput"
    });
  const handleStaleButtonClick = () =>
    setStaleInputValue({
      value: generateRandomValue(),
      generatedBy: "button"
    });

  const handleInputUpdate = value =>
    setInputValue({
      value,
      generatedBy: "textInput"
    });
  const handleButtonClick = () =>
    setInputValue({
      value: generateRandomValue(),
      generatedBy: "button"
    });

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Stale input no refresh</h1>
        <div>Parent state value: {staleInputValue.value}</div>
        <div>Generated by: {staleInputValue.generatedBy}</div>
        <TextInputStale
          value={staleInputValue.value}
          onUpdate={handleStaleInputUpdate}
        />

        <button onClick={handleStaleButtonClick}>Generate value</button>
      </div>

      <div className="wrapper">
        <h1>Input with refresh</h1>
        <div>Parent state value: {inputValue.value}</div>
        <div>Generated by: {inputValue.generatedBy}</div>
        <TextInput value={inputValue.value} onUpdate={handleInputUpdate} />
        <button onClick={handleButtonClick}>Generate value</button>
      </div>
    </div>
  );
}
