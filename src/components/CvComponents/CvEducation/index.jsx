import { CvCaja } from '../CvCaja';

export const CvEducation = () => {
  const date = new Date();
  return (
    <>
      <h2>Educación</h2>
      <CvCaja>
        <h3>Tirso de Molina</h3>
        <h3>Bachiller en Informática</h3>
        <p>{date.toString()}</p>
      </CvCaja>
    </>
  );
};
