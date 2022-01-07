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

  /* propiedad disabled */
  &:disabled {
    background: #ccc;
  }

  &[type='button'] {
    background: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    width: 20%;
    height: 30px;
    margin-top: -10px;

    &:hover {
      background: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }

  &[type='number'] {
    width: 20%;
    height: 30px;
    margin-top: -10px;
    margin-left: 20px;
  }

  &[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 55px;
`;
