import { useInputValue } from '../../hooks/useInputValues';
import { FormContext } from '../../context/FormContext';
import { useContext, useState } from 'react';
import { Form, Button, Input, Label, Items } from './styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const FormComponent = () => {
  const { handleSubmit } = useContext(FormContext);
  const [edit, setEdit] = useState(true);

  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const cargo = useInputValue('');
  const email = useInputValue('');
  const telefono = useInputValue('');
  const experiencias = useInputValue('');

  const [experiencies, setExperiencies] = useState([]);

  const handleAddExperiencia = () => {
    setExperiencies([...experiencies, experiencias]);
    experiencias.onChange({ target: { value: '' } });
  };

  const handleDelete = (index) => {
    const newExperiencies = [...experiencies];
    newExperiencies.splice(index, 1);
    setExperiencies(newExperiencies);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

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
        <Input type='text' placeholder='Experiencia' {...experiencias} />

        {experiencies.map((experiencia, index) => {
          return (
            <Items key={index}>
              <Input type='text' placeholder='Experiencia' {...experiencia} key={index} disabled={edit} />
              {console.log(experiencia.value)}
              <AiFillEdit onClick={handleEdit} size='32' />
              <AiFillDelete onClick={() => handleDelete(index)} size='32' />
            </Items>
          );
        })}
        <Button onClick={handleAddExperiencia}>Add</Button>
      </Label>
      <Button>Aceptar</Button>
    </Form>
  );
};
