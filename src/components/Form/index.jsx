import { useInputValue } from '../../hooks/useInputValues';
import { FormContext } from '../../context/FormContext';
import { useContext, useState } from 'react';
import { Form, Button, Input, Label } from './styles';

export const FormComponent = () => {
  const { handleSubmit } = useContext(FormContext);

  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const cargo = useInputValue('');
  const email = useInputValue('');
  const telefono = useInputValue('');
  const experiencia = useInputValue('');

  const [experiencies, setExperiencies] = useState([]);

  const handleAddExperiencia = () => {
    setExperiencies([...experiencies, experiencia.value]);
    experiencia.onChange({ target: { value: '' } });
  };

  console.log(experiencies);

  return (
    <Form onSubmit={(e) => handleSubmit(e, nombre, apellido, cargo, email, telefono)}>
      <h2>Llena la información de tu CV</h2>
      <Label htmlFor='nombre'>
        Nombre:
        <Input type='text' placeholder='Nombre' {...nombre} id='nombre' />
      </Label>
      <Label htmlFor='apellido'>
        Apellido:
        <Input type='text' placeholder='Apellido' {...apellido} id='apellido' />
      </Label>
      <Label htmlFor='cargo'>
        Cargo:
        <Input type='text' placeholder='Cargo' {...cargo} id='cargo' />
      </Label>
      <Label htmlFor='email'>
        Email:
        <Input type='email' placeholder='Email' {...email} id='email' />
      </Label>
      <Label htmlFor='tel'>
        Teléfono:
        <Input type='text' placeholder='Teléfono' {...telefono} id='tel' />
      </Label>
      <Label htmlFor=''>
        <Input type='text' placeholder='Experiencia' {...experiencia} />

        {experiencies.map((experiencia, index) => {
          return <Input type='text' placeholder='Experiencia' value={experiencia} key={index} disabled />;
        })}
        <Button onClick={handleAddExperiencia}>Add</Button>
      </Label>
      <Button>Aceptar</Button>
    </Form>
  );
};
