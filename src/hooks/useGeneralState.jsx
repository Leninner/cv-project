import { useState } from 'react';

export const useGeneralState = () => {
  const [generalState, setGeneralState] = useState({
    mainInfoValues: {}, // { name: '', lastName: '', description: '', email: '', tel: '', linkedin: '', github: '', twitter: '' }
    experienceValues: [], // [{ company: '', position: '', startDate: '', endDate: '', description: '' }]
    educationValues: [], // [{ titulo: '', escuela: '', startDate: '', endDate: '', current: '' }]
    certificationValues: [], // [{ credential: '', company: '', idCredential: '' }]
    skills: [],
  });

  const handleDelete = (index, param) => {
    const newValues = [...generalState[param]];
    newValues.splice(index, 1);
    setGeneralState({ ...generalState, [param]: newValues });
  };

  return { generalState, setGeneralState, handleDelete };
};
