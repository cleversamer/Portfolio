import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Skill from "../components/Skill";
import { skills } from "../data";

const Skills = () => {
  return (
    <Container>
      <Navbar path="/skills" />

      <Content>
        <SkillSet>
          {skills.map((skill) => (
            <Skill key={skill.id} {...skill} />
          ))}
        </SkillSet>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const SkillSet = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Skills;
