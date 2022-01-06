import { Header, Circulo } from './styles';

export const CvHeader = ({ name, lastName, cargo }) => {
  return (
    <Header>
      <Circulo />
      <h1>{name}</h1>
      <h2>{lastName}</h2>
      <h3>{cargo}</h3>
    </Header>
  );
};
