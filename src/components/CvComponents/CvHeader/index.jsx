import { Header, Circulo } from './styles';

export const CvHeader = ({ name = 'Lenin', lastName = 'Mazabanda', cargo = 'Frontend Developer' }) => {
  return (
    <Header>
      <Circulo />
      <h1>{name}</h1>
      <h2>{lastName}</h2>
      <h3>{cargo}</h3>
    </Header>
  );
};
