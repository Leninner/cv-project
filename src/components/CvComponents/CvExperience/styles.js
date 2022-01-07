import styled from 'styled-components';

export const ContainerInfoExperience = styled.div`
  position: relative;
  margin-top: 10px;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    visibility: hidden;
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }
`;
