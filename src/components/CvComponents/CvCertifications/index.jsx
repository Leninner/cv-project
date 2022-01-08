import { CvCaja } from '../CvCaja';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import { AiFillDelete } from 'react-icons/ai';
import { ContainerInfoExperience } from '../CvExperience/styles';

export const CvCertifications = () => {
  const { generalState, setGeneralState } = useContext(FormContext);
  const { certificationValues } = generalState;

  const handleDelete = (index) => {
    const newCertificationValues = [...certificationValues];
    newCertificationValues.splice(index, 1);
    setGeneralState({ ...generalState, certificationValues: newCertificationValues });
  };

  return (
    <>
      <h2>Certifications</h2>
      <CvCaja>
        {certificationValues.map((certification, index) => {
          const { credential, company, idCredential } = certification;

          return (
            <ContainerInfoExperience key={index}>
              <AiFillDelete onClick={() => handleDelete(index)} />
              <h3>{credential}</h3>
              <h4>{company}</h4>
              <p>{idCredential}</p>
            </ContainerInfoExperience>
          );
        })}
      </CvCaja>
    </>
  );
};
