import { FormInputs } from '../FormInputs';

export const FormMainInfo = () => {
  return (
    <>
      <FormInputs type='text' name='name' placeholder='Name' />

      <FormInputs type='text' name='apellido' placeholder='Apellido' />

      <FormInputs type='email' name='email' placeholder='Email' />

      <FormInputs type='tel' name='tel' placeholder='Phone' />
    </>
  );
};
