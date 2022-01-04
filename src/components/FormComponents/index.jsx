import { FormMainInfo } from './FormMainInfo';
import { FormExperience } from './FormExperience';
import { Button, FormContainer } from './styles';
import { FormEducation } from './FormEducation';
import { FormSkills } from './FormSkills';

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
      <h1>Education</h1>
      <FormEducation />
      <h1>Skills</h1>
      <FormSkills />
      <div>
        <Button>Enviar</Button>
      </div>
    </FormContainer>
  );
};
