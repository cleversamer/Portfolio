import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Heading>Home</Heading>
    </Container>
  );
};

const Container = styled.div``;

const Heading = styled.h1``;

export default Home;
