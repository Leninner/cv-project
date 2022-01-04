import { FormMainInfo } from './FormMainInfo';
import { FormExperience } from './FormExperience';

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Información principal</h1>
      <FormMainInfo />
      <h1>Experiencia</h1>
      <FormExperience />
      <button>Enviar</button>
    </form>
  );
};
