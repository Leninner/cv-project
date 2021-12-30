import styled from 'styled-components';
import { transitionXAnimation } from '../../styles/Animations';

export const Header = styled.header`
  postion: fixed;
  padding: 20px 65px;
  background-color: #1d1d1f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: white;
    font-size: 1.5em;
  }

  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      list-style: none;

      li {
        margin-left: 20px;
        display: flex;
        align-items: center;
        a {
          color: #adb5bd;
          text-decoration: none;
          font-size: 1em;
          font-weight: bold;

          &:hover {
            color: #ffc107;
          }
        }
      }
    }
  }

  svg {
    display: none;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 20px 35px;
    .desktop {
      display: none;
    }

    svg {
      display: block;
    }
  }
`;

export const NavMobile = styled.nav`
  position: absolute;
  right: 0;
  top: 65px;
  background-color: #1d1d1f;
  width: 50%;
  height: 100vh;
  ${transitionXAnimation()};
  z-index: 1;

  ul {
    list-style: none;
    text-align: center;

    li {
      margin-top: 50px;

      a {
        color: #adb5bd;
        text-decoration: none;
        font-size: 1.5em;
        font-weight: bold;
      }
    }
  }
`;
