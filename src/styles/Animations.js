import { css, keyframes } from 'styled-components';

const transitionX = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const transitionXAnimation = ({ time = '0.3s' } = {}) =>
  css`
    animation: ${time} ${transitionX};
  `;
