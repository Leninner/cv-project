import { useState } from 'react';

export const useFormValues = () => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e, nombre, apellido, cargo, email, telefono) => {
    e.preventDefault();

    setFormValues({
      nombre: nombre.value,
      apellido: apellido.value,
      cargo: cargo.value,
      email: email.value,
      telefono: telefono.value,
      experiencia: [],
    });
  };

  return { formValues, handleSubmit };
};
