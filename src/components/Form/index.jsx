import { FormContext } from '../../context/FormContext';
import { useContext, useState } from 'react';
import { Form, Button, Input, Label, Items, MainInfo } from './styles';
import { ItemExperience } from '../ItemExperience';
import { ItemsToEdit } from '../ItemsToEdit';

export const FormComponent = () => {
  const { formValues, setFormValues } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddExperience = (e, value) => {
    e.preventDefault();
    setFormValues({ ...formValues, experiences: [...formValues.experiences, value] });
  };

  const [experience, setExperience] = useState({});

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  console.log(experience);
  console.log(formValues);

  return (
    <Form>
      <h2>Llena la información de tu CV</h2>
      <MainInfo>
        <h1>Información Principal</h1>
        <Label htmlFor='nombre'>
          Nombre:
          <Input type='text' placeholder='Nombre' id='nombre' onChange={handleChange} name='nombre' />
        </Label>
        <Label htmlFor='apellido'>
          Apellido:
          <Input type='text' placeholder='Apellido' id='apellido' onChange={handleChange} name='apellido' />
        </Label>
        <Label htmlFor='cargo'>
          Cargo:
          <Input type='text' placeholder='Cargo' id='cargo' onChange={handleChange} name='cargo' />
        </Label>
        <Label htmlFor='email'>
          Email:
          <Input type='email' placeholder='Email' id='email' onChange={handleChange} name='email' />
        </Label>
        <Label htmlFor='tel'>
          Teléfono:
          <Input type='text' placeholder='Teléfono' id='tel' onChange={handleChange} name='telefono' />
        </Label>
        <Label htmlFor='linkedin'>
          Linkedin:
          <Input type='text' placeholder='Link to LikedIn' id='linkedin' onChange={handleChange} name='linkedin' />
        </Label>
      </MainInfo>

      <div>
        <h1>Información Complementaria</h1>

        <ItemExperience onChange={handleChangeExperience} />

        <Button onClick={(e) => handleAddExperience(e, experience)}>Agregar Experiencia</Button>

        {formValues.experiences.map((exp, index) => {
          return <ItemsToEdit key={index} onChange={handleChangeExperience} {...exp} />;
        })}

        <Label htmlFor=''>
          Educación:
          <Items>
            <div>
              <Label htmlFor='colegio'>
                Entidad Educativa:
                <Input type='text' placeholder='Entidad Educativa' id='colegio' />
              </Label>
              <Label htmlFor='degree'>
                Título Obtenido:
                <Input type='text' placeholder='Titulo Obtenido' id='degree' />
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
        </Label>
      </div>

      <Button>Aceptar</Button>
    </Form>
  );
};
