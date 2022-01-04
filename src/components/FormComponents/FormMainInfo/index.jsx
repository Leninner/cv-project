import { FormInputs } from '../FormInputs';
import { TextArea } from '../FormExperience/styles';
import { Label } from '../FormInputs/styles';

export const FormMainInfo = () => {
  return (
    <>
      <FormInputs type='text' name='name' placeholder='Name' />
      <FormInputs type='text' name='apellido' placeholder='Apellido' />
      <Label>
        Descríbete:
        <TextArea name='description' placeholder='¿Quién eres?' />
      </Label>
      <FormInputs type='email' name='email' placeholder='Email' />
      <FormInputs type='tel' name='tel' placeholder='Phone' />
      <FormInputs type='text' name='linkedIn' placeholder='LinkedIn' />
      <FormInputs type='text' name='github' placeholder='Github' />
      <FormInputs type='text' name='twitter' placeholder='Twitter' />
    </>
  );
};
