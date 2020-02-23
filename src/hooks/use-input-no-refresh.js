import { useState } from "react";

export const useInput = val => {
  const [value, setValue] = useState(val);

  console.log("value = ", value);

  return {
    value,
    setValue,
    onChange: event => {
      setValue(event.target.value);
    }
  };
};
