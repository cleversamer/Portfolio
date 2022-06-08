import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Skill from "../components/Skill";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", number: 50, imgUrl: "/assets/html.svg" },
    { id: 2, name: "CSS", number: 90, imgUrl: "/assets/css.svg" },
    { id: 3, name: "Sass", number: 85, imgUrl: "/assets/sass.svg" },
    { id: 4, name: "JavaScript", number: 95, imgUrl: "/assets/js.svg" },
    { id: 5, name: "React", number: 50, imgUrl: "/assets/react.svg" },
  ];

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
