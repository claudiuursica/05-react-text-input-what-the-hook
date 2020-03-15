import React from "react";
import { useInput } from "../hooks/use-input";

export const TextInput = ({ value = "", onUpdate }) => {
  const { value: stateValue, onChange: stateStateValue } = useInput(value);

  const handleInputKeyPressed = event => {
    const { key } = event;
    if (key === "Enter") {
      onUpdate(stateValue);
    }
  };

  return (
    <input
      type="text"
      value={stateValue}
      onChange={stateStateValue}
      onKeyPress={handleInputKeyPressed}
    />
  );
};
