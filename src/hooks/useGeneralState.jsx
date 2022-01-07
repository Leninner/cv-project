import { useState } from 'react';

export const useGeneralState = () => {
  const [generalState, setGeneralState] = useState({
    mainInfoValues: {}, // { name: '', lastName: '', description: '', email: '', tel: '', linkedin: '', github: '', twitter: '' }
    experienceValues: [], // [{ company: '', position: '', startDate: '', endDate: '', description: '' }]
    skills: [],
  });

  return { generalState, setGeneralState };
};
