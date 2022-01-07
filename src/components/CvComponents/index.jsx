import { CvAside } from './CvAside';
import { CvHeader } from './CvHeader';
import { CvContainer } from './styles';
import { CvInfo } from './CvInfo';
import { CvExperience } from './CvExperience';
import { CvEducation } from './CvEducation';
import { CvCertifications } from './CvCertifications';
import { CvDescription } from './CvDescription';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export const Cv = () => {
  const { generalState } = useContext(FormContext);
  const { mainInfoValues } = generalState;
  const { name, lastName, cargo, description, email, tel, linkedIn, github, twitter } = mainInfoValues;

  return (
    <CvContainer>
      <CvHeader name={name} lastName={lastName} cargo={cargo} />
      <CvAside email={email} tel={tel} linkedIn={linkedIn} github={github} twitter={twitter} />
      <CvInfo>
        <CvDescription description={description} />
        <CvExperience />
        <CvEducation />
        <CvCertifications />
      </CvInfo>
    </CvContainer>
  );
};
