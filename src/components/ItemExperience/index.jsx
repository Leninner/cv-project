import { Label, Input, Items } from '../Form/styles';
import { useState } from 'react';
import { TextArea, Actual } from './styles.js';

export const ItemExperience = ({ onChange }) => {
  const [actual, setActual] = useState(true);

  const handleActual = () => setActual(!actual);

  return (
    <>
      <Label>
        Experiencia:
        <Items>
          <div>
            <Label htmlFor='Cargo'>
              Cargo:
              <Input type='text' placeholder='Cargo' id='Cargo' {...onChange} name='Cargo' />
            </Label>
            <Label htmlFor='empresa'>
              Empresa:
              <Input type='text' placeholder='Empresa' {...onChange} name='Empresa' />
            </Label>
          </div>

          <div>
            <Label htmlFor='inicio'>
              Fecha Inicio:
              <Input type='date' name='inicio' id='inicio' {...onChange} />
            </Label>

            {actual && (
              <>
                {' '}
                <Label htmlFor='fin'>
                  Fecha Fin:
                  <Input type='date' name='fin' id='fin' {...onChange} />
                </Label>
              </>
            )}

            <Actual htmlFor='actual' active={actual}>
              Actualmente en este trabajo <Input type='checkbox' onClick={handleActual} id='actual' />
            </Actual>
          </div>

          <Label htmlFor='descripcion'>
            Descripción:
            <TextArea type='text' name='descripcion' id='descripcion' />
          </Label>
        </Items>
      </Label>
    </>
  );
};
