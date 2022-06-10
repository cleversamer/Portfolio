import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import ContactCard from "../components/ContactCard";
import { contacts } from "../data";

const Contact = () => {
  return (
    <Container>
      <Navbar path="/contact" />

      <Content>
        <Cards>
          {contacts.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </Cards>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Cards = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Contact;
