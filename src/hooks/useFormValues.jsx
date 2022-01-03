import { useState } from 'react';

export const useFormValues = () => {
  const [formValues, setFormValues] = useState({
    experiences: [],
  });

  return { formValues, setFormValues };
};
