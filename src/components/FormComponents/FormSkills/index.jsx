import { FormInputs } from '../FormInputs';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormSkills = () => {
  const { generalState, setGeneralState } = useContext(FormContext);

  const [skill, setSkill] = useState('');

  const handleChange = (e) => setSkill(e.target.value);

  const handleAddSkill = () => {
    setGeneralState({
      ...generalState,
      skills: [...generalState.skills, skill],
    });

    setSkill('');
  };

  return (
    <>
      <FormInputs name='skills' label='Skills' type='text' placeholder='Skills' value={skill} onChange={handleChange} />
      <FormInputs type='button' value='Add' onClick={handleAddSkill} />
    </>
  );
};
