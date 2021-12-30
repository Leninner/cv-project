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
  const empresa = useInputValue('');
  const descripcion = useInputValue('');

  const [experiencies, setExperiencies] = useState([]);

  const handleAddExperiencia = () => {
    setExperiencies([...experiencies, { empresa, descripcion }]);
    empresa.onChange({ target: { value: '' } });
    descripcion.onChange({ target: { value: '' } });
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
        Experiencia:
        <Items>
          <div>
            <Label htmlFor='empresa'>
              Empresa:
              <Input type='text' placeholder='Empresa' {...empresa} id='empresa' />
            </Label>
            <Label htmlFor='empresa'>
              Descripción:
              <Input type='text' placeholder='Descripción' {...descripcion} />
            </Label>
          </div>

          <div>
            <Label>
              Fecha Inicio:
              <Input type='date' name='' id='' />
            </Label>

            <Label>
              Fecha Fin:
              <Input type='date' name='' id='' />
            </Label>
          </div>
        </Items>
        {experiencies.map((experiencia, index) => {
          const { empresa, descripcion } = experiencia;

          console.log(empresa, descripcion);

          return (
            <Items key={index}>
              <div>
                <Label htmlFor='empresa'>
                  Empresa:
                  <Input type='text' placeholder='Empresa' {...empresa} id='empresa' disabled={edit} />
                </Label>
                <Label htmlFor='empresa'>
                  Descripción:
                  <Input type='text' placeholder='Descripción' {...descripcion} disabled={edit} />
                </Label>
              </div>

              <div>
                <Label>
                  Fecha Inicio:
                  <Input type='date' name='' id='' disabled={edit} />
                </Label>

                <Label>
                  Fecha Fin:
                  <Input type='date' name='' id='' disabled={edit} />
                </Label>
              </div>

              <div className='icons'>
                <AiFillDelete onClick={() => handleDelete(index)} size='25' />
                <AiFillEdit onClick={handleEdit} size='25' />
              </div>
            </Items>
          );
        })}
        <Button onClick={handleAddExperiencia}>Add</Button>
      </Label>
      <Button>Aceptar</Button>
    </Form>
  );
};
