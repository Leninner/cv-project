import { useState } from 'react';

export const useGeneralState = () => {
  const [generalState, setGeneralState] = useState({
    mainInfoValues: {}, // { name: '', lastName: '', description: '', email: '', tel: '', linkedin: '', github: '', twitter: '' }
    skills: [],
  });

  return { generalState, setGeneralState };
};
