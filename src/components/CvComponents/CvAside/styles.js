import styled from 'styled-components';

export const Aside = styled.aside`
  width: 30%;
  min-height: 100vh;
  height: 100%;
  background: #191919;
  position: relative;
  float: right;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  margin: 10px 0;
  border: 10px solid #191919;
  object-fit: cover;
  position: absolute;
  top: 25px;
  left: -40px;
`;

export const SkillSet = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  color: white;
  cursor: default;

  span {
    margin: 10px 0;
  }
`;
