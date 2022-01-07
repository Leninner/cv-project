import styled from 'styled-components';

export const SkillItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    visibility: hidden;
    margin-left: 5px;
  }

  &:hover {
    svg {
      visibility: visible;
      cursor: pointer;
    }
  }
`;
