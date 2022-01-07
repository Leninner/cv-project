import { FormInputs } from '../FormInputs';
import { TextArea } from '../FormExperience/styles';
import { Label } from '../FormInputs/styles';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormMainInfo = () => {
  const { generalState, setGeneralState } = useContext(FormContext);
  const [mainInfoValues, setMainInfoValues] = useState({});
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMainInfoValues({ ...mainInfoValues, [name]: value });
  };

  const handleSubmit = () => {
    setGeneralState({
      ...generalState,
      mainInfoValues: mainInfoValues,
    });
    setEdit(true);
  };

  const handleEdit = () => setEdit(false);

  return (
    <>
      <FormInputs
        type='text'
        name='name'
        placeholder='Nombre'
        value={mainInfoValues.name || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='text'
        name='lastName'
        placeholder='Apellido'
        value={mainInfoValues.lastName || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='text'
        name='cargo'
        placeholder='Cargo'
        value={mainInfoValues.cargo || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <Label>
        Descríbete:
        <TextArea
          name='description'
          placeholder='Describe tu perfil'
          value={mainInfoValues.description || ''}
          onChange={handleChange}
          disabled={edit}
        />
      </Label>
      <FormInputs
        type='email'
        name='email'
        placeholder='Email'
        value={mainInfoValues.email || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='tel'
        name='tel'
        placeholder='Teléfono'
        value={mainInfoValues.tel || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='text'
        name='linkedIn'
        placeholder='LinkedIn'
        value={mainInfoValues.linkedIn || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='text'
        name='github'
        placeholder='Github'
        value={mainInfoValues.github || ''}
        onChange={handleChange}
        disabled={edit}
      />
      <FormInputs
        type='text'
        name='twitter'
        placeholder='Twitter'
        value={mainInfoValues.twitter || ''}
        onChange={handleChange}
        disabled={edit}
      />
      {edit ? (
        <FormInputs type='button' name='button' value='Editar' onClick={handleEdit} />
      ) : (
        <FormInputs type='button' name='button' value='Aceptar' onClick={handleSubmit} />
      )}
    </>
  );
};
