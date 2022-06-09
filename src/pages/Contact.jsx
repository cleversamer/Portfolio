import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const contacts = [
    {
      id: 0,
      path: "/assets/resume.png",
      alt: "Samer's resume",
      url: "/assets/resume.pdf",
    },
    {
      id: 1,
      path: "/assets/linkedin.png",
      alt: "Twitter logo",
      url: "https://linkedin.com/in/cleversamerr",
    },
    {
      id: 2,
      path: "/assets/twitter.png",
      alt: "Twitter logo",
      url: "https://twitter.com/cleversamerr",
    },
    {
      id: 3,
      path: "/assets/github.png",
      alt: "GitHub logo",
      url: "https://github.com/cleversamerr",
    },
    {
      id: 4,
      path: "/assets/instagram.png",
      alt: "Instagram logo",
      url: "https://www.instagram.com/cleversamerr/",
    },
    {
      id: 5,
      path: "/assets/whatsapp.png",
      alt: "WhatsApp logo",
      url: "https://wa.me/972597367603",
    },
    {
      id: 6,
      path: "/assets/gmail.png",
      alt: "Gmail logo",
      url: "mailto:thedev.samer@gmail.com",
    },
  ];

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
