import { Label, Input, Items } from '../Form/styles';

export const ItemsToEdit = ({ onChange, empresa, cargo, inicio, fin, descripcion }) => {
  return (
    <Label>
      Experiencia:
      <Items>
        <div>
          <Label htmlFor='empresa'>
            Empresa:
            <Input
              type='text'
              placeholder='Empresa'
              id='empresa'
              {...onChange}
              name='empresa'
              value={empresa}
              disabled
            />
          </Label>
          <Label htmlFor='empresa'>
            Descripción:
            <Input type='text' placeholder='Descripción' {...onChange} name='descripcion' value={descripcion} />
          </Label>
        </div>

        <div>
          <Label htmlFor='inicio'>
            Fecha Inicio:
            <Input type='date' name='inicio' id='inicio' {...onChange} value={inicio} />
          </Label>

          <Label htmlFor='fin'>
            Fecha Fin:
            <Input type='date' name='fin' id='fin' {...onChange} value={fin} />
          </Label>
        </div>
      </Items>
    </Label>
  );
};
