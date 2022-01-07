import { FormInputs } from '../FormInputs';
import { Label } from '../FormInputs/styles';
import { TextArea } from './styles';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormExperience = () => {
  const { generalState, setGeneralState } = useContext(FormContext);
  const [current, setCurrent] = useState(false);
  const [experience, setExperience] = useState({
    current: false,
  });

  const handleCurrent = () => {
    setExperience({ ...experience, current: !current });
    setCurrent(!current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleAddExperience = () => {
    setGeneralState({
      ...generalState,
      experienceValues: [...generalState.experienceValues, experience],
    });
    setExperience({ current: false });
    setCurrent(false);
  };

  console.log(experience);

  return (
    <>
      <FormInputs
        type='text'
        name='position'
        placeholder='Position'
        onChange={handleChange}
        value={experience.position || ''}
      />
      <FormInputs
        type='text'
        name='company'
        placeholder='Company'
        onChange={handleChange}
        value={experience.company || ''}
      />
      <FormInputs type='date' name='startDate' placeholder='Start Date' onChange={handleChange} />
      <FormInputs
        type='checkbox'
        name='current'
        placeholder='Trabajo Actual'
        onChange={handleCurrent}
        checked={current}
      />

      {!current && <FormInputs type='date' name='endDate' placeholder='End Date' onChange={handleChange} />}

      <Label>
        Descripción:
        <TextArea
          name='description'
          placeholder='Description'
          onChange={handleChange}
          value={experience.description || ''}
        />
      </Label>

      <FormInputs type='button' value='Add' onClick={handleAddExperience} />
    </>
  );
};
