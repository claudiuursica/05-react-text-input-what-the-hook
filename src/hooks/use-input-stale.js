import { useState } from "react";

export const useInputStale = val => {
  const [value, setValue] = useState(val);

  console.log("useInputStale() value = ", value);

  return {
    value,
    setValue,
    onChange: event => {
      setValue(event.target.value);
    }
  };
};
