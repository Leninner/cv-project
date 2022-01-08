import { CvCaja } from '../CvCaja';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import { AiFillDelete } from 'react-icons/ai';
import { ContainerInfoExperience } from '../CvExperience/styles';

export const CvEducation = () => {
  const { generalState, handleDelete } = useContext(FormContext);
  const { educationValues } = generalState;

  return (
    <>
      <h2>Educación</h2>
      <CvCaja>
        {educationValues.map((education, index) => {
          const { titulo, escuela, startDate, endDate, current } = education;

          return (
            <ContainerInfoExperience key={index}>
              <AiFillDelete onClick={() => handleDelete(index, 'educationValues')} />
              <h3>{titulo}</h3>
              <h4>{escuela}</h4>
              <h5>{current ? 'Actual' : `${startDate} - ${endDate}`}</h5>
            </ContainerInfoExperience>
          );
        })}
      </CvCaja>
    </>
  );
};
