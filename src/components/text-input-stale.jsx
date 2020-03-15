import React from "react";
import { useInputStale } from "../hooks/use-input-stale";

export const TextInputStale = ({ value = "", onUpdate }) => {
  const { value: stateValue, onChange: stateStateValue } = useInputStale(value);

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
