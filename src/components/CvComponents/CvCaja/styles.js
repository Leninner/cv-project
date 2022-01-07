import styled from 'styled-components';

export const BoxModel = styled.div`
  font-size: 1rem;
  margin: 0.7rem 20px;
  padding: 0 1rem;
  text-align: justify;
  width: 95%;
  z-index: 1;

  h3 {
    font-size: 1.3rem;
    color: #ffb001;
  }

  h4 {
    font-size: 1.05rem;
  }

  h5 {
    font-size: 1rem;
    color: #2a9d8f;
  }

  p {
    color: grey;
  }

  @media (max-width: 768px) {
    width: 60%;
    top: 175px;
    font-size: 0.8rem;
  }
`;
