import { CvCaja } from '../CvCaja';

export const CvExperience = () => {
  const date = new Date();

  return (
    <>
      <h2>Experiencia</h2>
      <CvCaja>
        <h3>Ioet Inc</h3>
        <h4>{date.toString()}</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis perferendis, possimus, minus vero debitis
          consectetur nam architecto voluptate eligendi ex maxime adipisci pariatur in facere rerum aperiam perspiciatis
          quisquam modi.
        </p>
      </CvCaja>
    </>
  );
};
