import { FormInputs } from '../FormInputs';
import { Label } from '../FormInputs/styles';
import { TextArea } from './styles';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormExperience = () => {
  const { handleAdd, formValues, handleChange, handleCurrent } = useContext(FormContext);

  return (
    <>
      <FormInputs
        type='text'
        name='position'
        placeholder='Position'
        onChange={handleChange}
        value={formValues.position || ''}
      />
      <FormInputs
        type='text'
        name='company'
        placeholder='Company'
        onChange={handleChange}
        value={formValues.company || ''}
      />
      <FormInputs
        type='date'
        name='startDateExperience'
        placeholder='Start Date'
        onChange={handleChange}
        value={formValues.startDateExperience || ''}
      />
      <FormInputs
        type='checkbox'
        name='current'
        placeholder='Trabajo Actual'
        onChange={handleCurrent}
        checked={formValues.current}
      />

      {!formValues.current && (
        <FormInputs
          type='date'
          name='endDateExperience'
          placeholder='End Date'
          onChange={handleChange}
          value={formValues.endDateExperience || ''}
        />
      )}

      <Label>
        Descripción:
        <TextArea
          name='descriptionExperience'
          placeholder='Description'
          onChange={handleChange}
          value={formValues.descriptionExperience || ''}
        />
      </Label>

      <FormInputs type='button' value='Add' onClick={() => handleAdd('experienceValue')} />
    </>
  );
};
