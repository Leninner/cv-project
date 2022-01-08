import { FormInputs } from '../FormInputs';
import { useState, useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormCertifications = () => {
  const { handleAdd } = useContext(FormContext);
  const [certification, setCertification] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertification({ ...certification, [name]: value });
  };

  return (
    <>
      <FormInputs
        type='text'
        name='credential'
        placeholder='Credential'
        onChange={handleChange}
        value={certification.credential || ''}
      />
      <FormInputs
        type='text'
        name='company'
        placeholder='Company'
        onChange={handleChange}
        value={certification.company || ''}
      />
      <FormInputs
        type='text'
        name='idCredential'
        placeholder='Id Credential'
        onChange={handleChange}
        value={certification.idCredential || ''}
      />
      <FormInputs
        type='button'
        value='Add'
        onClick={() => handleAdd('certificationValues', certification, setCertification)}
      />
    </>
  );
};
