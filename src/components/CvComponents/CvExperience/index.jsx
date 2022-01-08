import { CvCaja } from '../CvCaja';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import { AiFillDelete } from 'react-icons/ai';
import { ContainerInfoExperience } from './styles';

export const CvExperience = () => {
  const { generalState, handleDelete } = useContext(FormContext);
  const { experienceValues } = generalState;

  return (
    <>
      <h2>Experience</h2>
      <CvCaja>
        {experienceValues.map((experience, index) => {
          const { company, position, startDateExperience, endDateExperience, descriptionExperience, current } =
            experience;

          return (
            <ContainerInfoExperience key={index}>
              <div>
                <AiFillDelete onClick={() => handleDelete(index, 'experienceValues')} />
              </div>

              <h3>{position}</h3>
              <h4>{company}</h4>
              <h5>{current ? 'Actual' : `${startDateExperience} - ${endDateExperience}`}</h5>
              <p>{descriptionExperience}</p>
            </ContainerInfoExperience>
          );
        })}
      </CvCaja>
    </>
  );
};
