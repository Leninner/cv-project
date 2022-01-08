import { FormInputs } from '../FormInputs';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormEducation = () => {
  const { handleAdd, formValues, handleChange, handleCurrent } = useContext(FormContext);

  return (
    <>
      <FormInputs
        name='titulo'
        label='Título'
        type='text'
        placeholder='Título'
        value={formValues.titulo || ''}
        onChange={handleChange}
      />
      <FormInputs
        name='escuela'
        label='Escuela'
        type='text'
        placeholder='Escuela'
        value={formValues.escuela || ''}
        onChange={handleChange}
      />
      <FormInputs
        name='startDate'
        label='Año'
        type='date'
        placeholder='Start Date'
        onChange={handleChange}
        value={formValues.startDate || ''}
      />
      <FormInputs
        name='current'
        type='checkbox'
        placeholder='Current'
        onChange={handleCurrent}
        checked={formValues.current}
      />
      {!formValues.current && (
        <FormInputs
          name='endDate'
          label='Año'
          type='date'
          placeholder='End Date'
          onChange={handleChange}
          value={formValues.endDate || ''}
        />
      )}
      <FormInputs type='button' value='Add' onClick={() => handleAdd('educationValues')} />
    </>
  );
};
