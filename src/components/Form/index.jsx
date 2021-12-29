import { useInputValue } from '../../hooks/useInputValues';
import { FormContext } from '../../context/FormContext';
import { useContext } from 'react';

export const FormComponent = () => {
  const { handleSubmit } = useContext(FormContext);

  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const cargo = useInputValue('');
  const email = useInputValue('');
  const telefono = useInputValue('');

  return (
    <form onSubmit={(e) => handleSubmit(e, nombre, apellido, cargo, email, telefono)}>
      <h2>Llena la información de tu CV</h2>
      <label htmlFor=''>
        <input type='text' placeholder='Nombre' {...nombre} />
      </label>
      <label htmlFor=''>
        <input type='text' placeholder='Apellido' {...apellido} />
      </label>
      <label htmlFor=''>
        <input type='text' placeholder='Cargo' {...cargo} />
      </label>
      <label htmlFor=''>
        <input type='email' placeholder='Email' {...email} />
      </label>
      <label htmlFor=''>
        <input type='text' placeholder='Teléfono' {...telefono} />
      </label>
      <button>Aceptar</button>
    </form>
  );
};
