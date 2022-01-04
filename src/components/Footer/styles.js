import styled from 'styled-components';

export const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  padding: 20px;
  font-size: 0.8rem;
  color: #9e9e9e;

  @media (max-width: 768px) {
    display: none;
  }
`;
