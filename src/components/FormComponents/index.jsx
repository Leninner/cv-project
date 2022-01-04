import { FormMainInfo } from './FormMainInfo';
import { FormExperience } from './FormExperience';
import { Button, FormContainer } from './styles';

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Información principal</h1>
      <FormMainInfo />
      <h1>Experiencia</h1>
      <FormExperience />
      <div>
        <Button>Enviar</Button>
      </div>
    </FormContainer>
  );
};
