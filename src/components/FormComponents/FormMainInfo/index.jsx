import { FormInputs } from '../FormInputs';
import { TextArea } from '../FormExperience/styles';
import { Label } from '../FormInputs/styles';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormMainInfo = () => {
  const { generalState, setGeneralState } = useContext(FormContext);

  const [mainInfoValues, setMainInfoValues] = useState({});

  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMainInfoValues({ ...mainInfoValues, [name]: value });
  };

  const handleSubmit = () => {
    setGeneralState({
      ...generalState,
      mainInfoValues: mainInfoValues,
    });
    setIsDisabled(true);
  };

  console.log(generalState);

  return (
    <>
      <FormInputs type='text' name='name' placeholder='Name' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='text' name='lastName' placeholder='Apellido' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='text' name='cargo' placeholder='Cargo' onChange={handleChange} disabled={isDisabled} />
      <Label>
        Descríbete:
        <TextArea name='description' placeholder='¿Quién eres?' onChange={handleChange} disabled={isDisabled} />
      </Label>
      <FormInputs type='email' name='email' placeholder='Email' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='tel' name='tel' placeholder='Phone' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='text' name='linkedIn' placeholder='LinkedIn' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='text' name='github' placeholder='Github' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='text' name='twitter' placeholder='Twitter' onChange={handleChange} disabled={isDisabled} />
      <FormInputs type='button' name='button' value='Aceptar' onClick={handleSubmit} />
    </>
  );
};
