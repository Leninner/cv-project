import { FormInputs } from '../FormInputs';

export const FormEducation = () => {
  return (
    <>
      <FormInputs name='titulo' label='Título' type='text' placeholder='Título' />
      <FormInputs name='escuela' label='Escuela' type='text' placeholder='Escuela' />
      <FormInputs name='anio' label='Año' type='text' placeholder='Año' />
      <FormInputs type='button' value='Add' />
    </>
  );
};
