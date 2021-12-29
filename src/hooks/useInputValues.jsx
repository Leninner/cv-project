import { useState } from 'react';

export const useInputValue = (initialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
