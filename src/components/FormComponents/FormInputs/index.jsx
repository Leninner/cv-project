import { Input, Label } from './styles';

export const FormInputs = (props) => {
  return (
    <Label>
      {props.placeholder}
      <Input {...props} />
    </Label>
  );
};
