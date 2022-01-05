import { CvAside } from './CvAside';
import { CvHeader } from './CvHeader';
import { CvContainer } from './styles';
import { CvInfo } from './CvInfo';

export const Cv = () => {
  return (
    <CvContainer>
      <CvHeader />
      <CvAside />
      <CvInfo />
    </CvContainer>
  );
};
