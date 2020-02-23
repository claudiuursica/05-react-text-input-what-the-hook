import React, { useState } from "react";
import { TextInput } from "./components/text-input-no-refresh";

import "./styles.css";

const generateRandomValue = () => Math.floor(Math.random() * 10000);

export default function App() {
  const initialValue = generateRandomValue();

  const [inputUpdatedValue, setInputUpdatedValue] = useState(initialValue);
  const [randomInputValue, setRandomInputValue] = useState(initialValue);

  const handleInputUpdate = value => {
    console.log("handleInputUpdate() value = ", value);
    setInputUpdatedValue(value);
  };

  const handleButtonClick = () => {
    setRandomInputValue(generateRandomValue());
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>No input refresh</h1>
        <div className="flex">
          <TextInput value={randomInputValue} onUpdate={handleInputUpdate} />
          <div>Input updated value: {inputUpdatedValue}</div>
        </div>

        <div className="flex">
          <button onClick={handleButtonClick}>Update value</button>
          <div>Button generated value: {randomInputValue}</div>
        </div>
      </div>

      <div className="wrapper">
        <h1>With input refresh</h1>
        <div className="flex">
          <TextInput value={randomInputValue} onUpdate={handleInputUpdate} />
          <div>Input updated value: {inputUpdatedValue}</div>
        </div>

        <div className="flex">
          <button onClick={handleButtonClick}>Update value</button>
          <div>Button generated value: {randomInputValue}</div>
        </div>
      </div>
    </div>
  );
}
