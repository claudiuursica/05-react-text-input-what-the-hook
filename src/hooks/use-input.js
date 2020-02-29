import { useState, useEffect } from "react";

export const useInput = val => {
  const [value, setValue] = useState(val);

  useEffect(() => setValue(val), [val]);

  console.log("useInput() value = ", value);

  return {
    value,
    setValue,
    onChange: event => {
      setValue(event.target.value);
    }
  };
};
