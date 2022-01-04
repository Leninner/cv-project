import { FormInputs } from '../FormInputs';
import { Label } from '../FormInputs/styles';
import { TextArea } from './styles';
import { useState } from 'react';

export const FormExperience = () => {
  const [current, setCurrent] = useState(false);

  const handleCurrent = () => setCurrent(!current);

  return (
    <>
      <FormInputs type='text' name='company' placeholder='Company' />
      <FormInputs type='text' name='job' placeholder='Job' />
      <FormInputs type='date' name='startDate' placeholder='Start Date' />
      <FormInputs type='checkbox' name='current' placeholder='Trabajo Actual' onClick={handleCurrent} />

      {!current && <FormInputs type='date' name='endDate' placeholder='End Date' />}

      <Label>
        Descripción:
        <TextArea name='description' placeholder='Description' />
      </Label>
      <FormInputs type='button' value='Add' />
    </>
  );
};
