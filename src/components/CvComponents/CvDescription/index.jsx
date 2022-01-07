import { CvCaja } from '../CvCaja';

export const CvDescription = ({ description }) => {
  return (
    <>
      <h2>Personal Info</h2>
      <CvCaja>
        <p>{description}</p>
      </CvCaja>
    </>
  );
};
