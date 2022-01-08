import { FormInputs } from '../FormInputs';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormEducation = () => {
  const { generalState, setGeneralState } = useContext(FormContext);
  const [education, setEducation] = useState({});
  const [current, setCurrent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleCurrent = () => {
    setEducation({ ...education, current: !current });
    setCurrent(!current);
  };

  const handleAddEducation = () => {
    setGeneralState({
      ...generalState,
      educationValues: [...generalState.educationValues, education],
    });
    setEducation({});
    setCurrent(false);
  };

  return (
    <>
      <FormInputs
        name='titulo'
        label='Título'
        type='text'
        placeholder='Título'
        value={education.titulo || ''}
        onChange={handleChange}
      />
      <FormInputs
        name='escuela'
        label='Escuela'
        type='text'
        placeholder='Escuela'
        value={education.escuela || ''}
        onChange={handleChange}
      />
      <FormInputs
        name='startDate'
        label='Año'
        type='date'
        placeholder='Start Date'
        onChange={handleChange}
        value={education.startDate || ''}
      />
      <FormInputs name='current' type='checkbox' placeholder='Current' onChange={handleCurrent} checked={current} />
      {!current && (
        <FormInputs
          name='endDate'
          label='Año'
          type='date'
          placeholder='End Date'
          onChange={handleChange}
          value={education.endDate || ''}
        />
      )}
      <FormInputs type='button' value='Add' onClick={handleAddEducation} />
    </>
  );
};
