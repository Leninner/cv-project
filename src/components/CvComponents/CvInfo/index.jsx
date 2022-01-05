import { CvDescription } from '../CvDescription';
import { CvInfoContainer } from './styles';
import { CvExperience } from '../CvExperience';
import { CvEducation } from '../CvEducation';
import { CvCertifications } from '../CvCertifications';

export const CvInfo = () => {
  return (
    <CvInfoContainer>
      <CvDescription />
      <CvExperience />
      <CvEducation />
      <CvCertifications />
    </CvInfoContainer>
  );
};
