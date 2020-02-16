import React, { useState } from "react";
import { TextInput } from "./components/text-input";

import "./styles.css";

export default function App() {
  const [inputUpdatedValue, setInputUpdatedValue] = useState("");
  const [randomInputValue, setRandomInputValue] = useState(Math.random());

  const handleInputUpdate = value => {
    console.log("handleInputUpdate() value = ", value);
    setInputUpdatedValue(value);
  };

  const handleButtonClick = () => {
    setRandomInputValue(Math.random());
  };

  return (
    <div className="App">
      <TextInput value={randomInputValue} onUpdate={handleInputUpdate} />
      <div>Input broadcasted value: {inputUpdatedValue}</div>

      <div>Button generated value: {randomInputValue}</div>
      <button onClick={handleButtonClick}>Update value</button>
    </div>
  );
}
