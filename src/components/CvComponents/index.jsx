import { CvAside } from './CvAside';
import { CvHeader } from './CvHeader';
import { CvContainer } from './styles';

export const Cv = () => {
  return (
    <CvContainer>
      <CvHeader />
      <CvAside />
    </CvContainer>
  );
};
