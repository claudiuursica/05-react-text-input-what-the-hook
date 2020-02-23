import React from "react";

import { useInput } from "../hooks/use-input-no-refresh";

export const TextInput = ({ value = "", onUpdate }) => {
  const { value: stateValue, onChange: stateStateValue } = useInput(value);

  console.log("stateValue = ", stateValue);

  const handleInputKeyPressed = event => {
    const { key } = event;
    if (key === "Enter") {
      console.log("broadcasting value = ", stateValue);
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
