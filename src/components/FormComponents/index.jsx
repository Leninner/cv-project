import { FormMainInfo } from './FormMainInfo';
import { FormExperience } from './FormExperience';
import { FormContainer } from './styles';
import { FormEducation } from './FormEducation';
import { FormSkills } from './FormSkills';
import { FormCertifications } from './FormCertifications';

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
      <h1>Certificaciones</h1>
      <FormCertifications />
      <h1>Skills</h1>
      <FormSkills />
    </FormContainer>
  );
};

// autoComplete='off'
