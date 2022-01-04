import styled from 'styled-components';

export const Header = styled.header`
  height: 200px;
  background: #ffb001;
  right: 30%;
  left: 150px;
  top: 35px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.3rem;

  h2 {
    font-weight: normal;
  }
`;

export const Circulo = styled.div`
  width: 200px;
  height: 200px;
  background: #ffb001;
  border-radius: 50%;
  position: absolute;
  left: -100px;
  top: calc(50% - 100px);
  z-index: -1;
`;
