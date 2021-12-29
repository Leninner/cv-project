import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export const Prueba = () => {
  const { formValues } = useContext(FormContext);

  return (
    <>
      <h3>{formValues.nombre}</h3>
      <h3>{formValues.apellido}</h3>
      <h3>{formValues.cargo}</h3>
      <h3>{formValues.email}</h3>
      <h3>{formValues.telefono}</h3>
    </>
  );
};
