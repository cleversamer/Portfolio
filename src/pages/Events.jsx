import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Events = () => {
  return (
    <Container>
      <Navbar path="/events" />

      <Content>
        <h1>Hello World!</h1>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

export default Events;
