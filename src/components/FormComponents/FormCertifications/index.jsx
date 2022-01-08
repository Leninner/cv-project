import { FormInputs } from '../FormInputs';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const FormCertifications = () => {
  const { handleAdd, formValues, handleChange } = useContext(FormContext);

  return (
    <>
      <FormInputs
        type='text'
        name='credential'
        placeholder='Credential'
        onChange={handleChange}
        value={formValues.credential || ''}
      />
      <FormInputs
        type='text'
        name='company'
        placeholder='Company'
        onChange={handleChange}
        value={formValues.company || ''}
      />
      <FormInputs
        type='text'
        name='idCredential'
        placeholder='Id Credential'
        onChange={handleChange}
        value={formValues.idCredential || ''}
      />
      <FormInputs type='button' value='Add' onClick={() => handleAdd('certificationValues')} />
    </>
  );
};
