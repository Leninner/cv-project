import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  margin-top: 5px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #000;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 55px;
`;
