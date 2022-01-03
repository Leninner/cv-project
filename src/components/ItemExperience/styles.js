import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: #333;
  border: 1px solid #ddd;
`;

export const Actual = styled.label`
  ${(props) =>
    !props.active &&
    css`
       {
        color: #4d85ee;
      }
    `}

  font-weight: normal;
  color: #3337;
`;
