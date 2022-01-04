import { FormInputs } from '../FormInputs';

export const FormSkills = () => {
  return (
    <>
      <FormInputs name='skills' label='Skills' type='text' placeholder='Skills' />
      <FormInputs type='button' value='Add' />
    </>
  );
};
