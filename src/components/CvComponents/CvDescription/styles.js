import styled from 'styled-components';

export const Description = styled.div`
  font-size: 1rem;
  margin: 0.7rem 20px;
  padding: 0 1rem;
  text-align: justify;
  width: 95%;
  z-index: 1;

  p {
    color: grey;
  }

  @media (max-width: 768px) {
    width: 60%;
    top: 175px;
    font-size: 0.8rem;
  }
`;
