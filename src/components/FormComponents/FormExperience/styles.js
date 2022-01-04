import styled from 'styled-components';

export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  margin-top: 5px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #000;
  }
`;
