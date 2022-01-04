import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;

  div {
    width: 80%;
    align-items: center;
    margin: 10px auto;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: none;
  background-color: #4361ee;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: white;
    border: 1px solid #4361ee;
    color: #000;
  }
`;
