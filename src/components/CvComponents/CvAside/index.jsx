import { Aside, Img, SkillSet } from './styles';

export const CvAside = () => {
  return (
    <Aside>
      <Img
        src='https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80'
        alt='Imagen'
      />
      <SkillSet>
        <h3>Professional Skills</h3>
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
      </SkillSet>
    </Aside>
  );
};
