import { Label, Input, Items } from '../Form/styles';
import { TextArea } from '../ItemExperience/styles.js';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';

export const ItemsToEdit = ({ empresa, cargo, inicio, descripcion }) => {
  const [edit, setEdit] = useState(true);
  const handleEdit = () => setEdit(!edit);

  return (
    <Label>
      Experiencia:
      <Items>
        <div>
          <Label htmlFor='Cargo'>
            Cargo:
            <Input type='text' placeholder='Cargo' id='Cargo' name='Cargo' value={cargo} disabled={edit} />
          </Label>
          <Label htmlFor='empresa'>
            Empresa:
            <Input type='text' placeholder='Empresa' name='Empresa' value={empresa} disabled={edit} />
          </Label>
        </div>

        <div>
          <Label htmlFor='inicio'>
            Fecha Inicio:
            <Input type='date' name='inicio' id='inicio' value={inicio} disabled={edit} />
          </Label>
        </div>

        <Label htmlFor='descripcion'>
          Descripción:
          <TextArea type='text' name='descripcion' id='descripcion' value={descripcion} disabled={edit} />
        </Label>

        <div>
          <AiFillEdit onClick={handleEdit} />
        </div>
      </Items>
    </Label>
  );
};
