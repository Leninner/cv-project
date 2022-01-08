import { useState } from 'react';

export const useGeneralState = () => {
  const [generalState, setGeneralState] = useState({
    mainInfoValues: {}, // { name: '', lastName: '', description: '', email: '', tel: '', linkedin: '', github: '', twitter: '' }
    experienceValues: [], // [{ company: '', position: '', startDate: '', endDate: '', description: '' }]
    educationValues: [], // [{ titulo: '', escuela: '', startDate: '', endDate: '', current: '' }]
    certificationValues: [], // [{ credential: '', company: '', idCredential: '' }]
    skills: [],
  });

  const [formValues, setFormValues] = useState({});

  const handleDelete = (index, param) => {
    const newValues = [...generalState[param]];
    newValues.splice(index, 1);
    setGeneralState({ ...generalState, [param]: newValues });
  };

  const handleAdd = (param) => {
    setGeneralState({ ...generalState, [param]: [...generalState[param], formValues] });
    setFormValues({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return { generalState, setGeneralState, handleDelete, handleAdd, formValues, handleChange };
};
