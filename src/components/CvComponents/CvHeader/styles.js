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

  @media (max-width: 768px) {
    right: 50px;
    left: 0;
    padding: 0 25px;
    height: 150px;
    font-size: 0.8rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;
