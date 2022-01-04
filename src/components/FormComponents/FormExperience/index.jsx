import { FormInputs } from '../FormInputs';
import { Label } from '../FormInputs/styles';
import { TextArea } from './styles';

export const FormExperience = () => {
  return (
    <>
      <FormInputs type='text' name='company' placeholder='Company' />
      <FormInputs type='text' name='job' placeholder='Job' />
      <FormInputs type='date' name='startDate' placeholder='Start Date' />
      <FormInputs type='date' name='endDate' placeholder='End Date' />
      <Label>
        Descripción:
        <TextArea name='description' placeholder='Description' />
      </Label>
    </>
  );
};
