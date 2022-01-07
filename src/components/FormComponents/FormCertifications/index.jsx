import { FormInputs } from '../FormInputs';

export const FormCertifications = () => {
  return (
    <>
      <FormInputs type='text' name='credential' placeholder='Credential' />
      <FormInputs type='text' name='company' placeholder='Company' />
      <FormInputs type='text' name='idCredential' placeholder='Id Credential' />
      <FormInputs type='button' value='Add' />
    </>
  );
};
