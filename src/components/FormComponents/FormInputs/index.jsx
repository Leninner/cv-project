import { Input, Label } from './styles';

export const FormInputs = (props) => {
  const { placeholder } = props;

  return (
    <Label>
      {placeholder}
      <Input {...props} />
    </Label>
  );
};
