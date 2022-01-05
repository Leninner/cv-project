import { CvDescription } from '../CvDescription';
import { CvInfoContainer } from './styles';

export const CvInfo = ({ height }) => {
  return (
    <CvInfoContainer height={height}>
      <CvDescription />
    </CvInfoContainer>
  );
};
