import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <Container>
      <Navbar path="/contact" />

      <Content>
        <Cards>
          <ContactCard
            path="/assets/linkedin.png"
            alt="LinkedIn logo"
            url="https://linkedin.com/in/cleversamerr"
          />

          <ContactCard
            path="/assets/twitter.png"
            alt="Twitter logo"
            url="https://twitter.com/cleversamerr"
          />

          <ContactCard
            path="/assets/github.png"
            alt="GitHub logo"
            url="https://github.com/cleversamerr"
          />

          <ContactCard
            path="/assets/instagram.png"
            alt="Instagram logo"
            url="https://www.instagram.com/cleversamerr/"
          />

          <ContactCard
            path="/assets/whatsapp.png"
            alt="WhatsApp logo"
            url="https://wa.me/972597367603"
          />

          <ContactCard
            path="/assets/gmail.png"
            alt="Gmail logo"
            url="mailto:thedev.samer@gmail.com"
          />
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
