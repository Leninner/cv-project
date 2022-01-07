import { CvCaja } from '../CvCaja';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';

export const CvEducation = () => {
  const { generalState, setGeneralState } = useContext(FormContext);

  const date = new Date();
  return (
    <>
      <h2>Educación</h2>
      <CvCaja>
        <h3>Tirso de Molina</h3>
        <h4>Bachiller en Informática</h4>

        <p>{date.toString()}</p>
      </CvCaja>
    </>
  );
};
