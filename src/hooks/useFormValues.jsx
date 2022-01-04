import { useState } from 'react';

export const useFormValues = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return { edit, handleEdit };
};
