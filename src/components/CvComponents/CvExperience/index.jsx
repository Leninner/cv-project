import { CvCaja } from '../CvCaja';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import { AiFillDelete } from 'react-icons/ai';
import { ContainerInfoExperience } from './styles';

export const CvExperience = () => {
  const { generalState, setGeneralState } = useContext(FormContext);
  const { experienceValues } = generalState;

  const handleDelete = (index) => {
    const newExperienceValues = [...experienceValues];
    newExperienceValues.splice(index, 1);
    setGeneralState({ ...generalState, experienceValues: newExperienceValues });
  };

  return (
    <>
      <h2>Experiencia</h2>
      <CvCaja>
        {experienceValues.map((experience, index) => {
          const { company, position, startDate, endDate, description, current } = experience;

          return (
            <ContainerInfoExperience key={index}>
              <div>
                {' '}
                <AiFillDelete onClick={() => handleDelete(index)} />
              </div>

              <h3>{position}</h3>
              <h4>{company}</h4>
              <h5>{current ? 'Actual' : `${startDate} - ${endDate}`}</h5>
              <p>{description}</p>
            </ContainerInfoExperience>
          );
        })}
      </CvCaja>
    </>
  );
};
