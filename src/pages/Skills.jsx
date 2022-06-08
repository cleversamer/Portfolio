import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Skills = () => {
  return (
    <Container>
      <Navbar path="/skills" />

      <Content>
        <h1>Hello World!</h1>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

export default Skills;
