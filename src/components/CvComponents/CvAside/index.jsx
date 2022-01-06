import { Aside, Img, SkillSet, SocialContainer } from './styles';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { CvSkillsItem } from '../CvSkillsItem';

export const CvAside = ({ email, tel, linkedIn, github, twitter }) => {
  const SIZE = 40;

  return (
    <Aside>
      <Img
        src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80'
        alt='Imagen'
      />
      <SocialContainer>
        <a href={github} target='_blank' rel='noreferrer'>
          <AiFillGithub size={SIZE} />
        </a>
        <a href={linkedIn} target='_blank' rel='noreferrer'>
          <AiFillLinkedin size={SIZE} />
        </a>
        <a href={twitter} target='_blank' rel='noreferrer'>
          <AiFillTwitterCircle size={SIZE} />
        </a>
      </SocialContainer>
      <span>{email}</span>
      <span>{tel}</span>
      <SkillSet>
        <h3>Professional Skills</h3>
        <CvSkillsItem text='React' />
        <CvSkillsItem text='NodeJs' />
        <CvSkillsItem text='Inglés' />
        <CvSkillsItem text='Cantar' />
        <CvSkillsItem text='Productividad' />
        <CvSkillsItem text='Trabajo en Equipo' />
        <CvSkillsItem text='Francés' />
      </SkillSet>
    </Aside>
  );
};
