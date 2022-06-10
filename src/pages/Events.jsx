import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Events = () => {
  const events = [];

  return (
    <Container>
      <Navbar path="/events" />

      <Content>
        {events.length ? (
          <Heading>{events.length} upcoming events!</Heading>
        ) : (
          <Heading>No upcoming events yet...</Heading>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Heading = styled.h3`
  text-align: center;
  color: #333;
`;

export default Events;
