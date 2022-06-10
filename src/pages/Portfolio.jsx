import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Project from "../components/Project";
import { projects } from "../data";

const Portfolio = () => {
  return (
    <Container>
      <Navbar path="/portfolio" />

      <Content>
        <Projects>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </Projects>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Projects = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1vw;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5vw;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2vw;
  }
`;

export default Portfolio;
