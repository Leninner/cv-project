import { FormMainInfo } from './FormMainInfo';
import { FormExperience } from './FormExperience';

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormMainInfo />
      <FormExperience />
      <button>Enviar</button>
    </form>
  );
};
