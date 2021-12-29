import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;

  &:focus {
    border-color: #4d85ee;
    box-shadow: 0 0 10px rgba(77, 133, 238, 0.5);
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background-color: #4d85ee;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
