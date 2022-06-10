import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Natours", imgUrl: "/assets/natours.png" },
    { id: 2, title: "Trillo", imgUrl: "/assets/trillo.png" },
    { id: 3, title: "Nexter", imgUrl: "/assets/nexter.png" },
    { id: 4, title: "Vidly", imgUrl: "/assets/mern-vidly.png" },
    { id: 5, title: "Moshify", imgUrl: "/assets/moshify.png" },
    { id: 6, title: "TO-DO List", imgUrl: "/assets/react-todo.png" },
    { id: 7, title: "Advisor", imgUrl: "/assets/react-advisor.png" },
    { id: 8, title: "Photo Album", imgUrl: "/assets/react-photo-album.png" },
    { id: 9, title: "Movie Land", imgUrl: "/assets/react-movie-land.png" },
    { id: 10, title: "Tesla Clone", imgUrl: "/assets/react-tesla.png" },
    { id: 11, title: "WhatsApp Clone", imgUrl: "/assets/react-whatsapp.png" },
    { id: 12, title: "Messenger Clone", imgUrl: "/assets/react-messenger.png" },
    { id: 13, title: "Tik Tok Clone", imgUrl: "/assets/react-tiktok.png" },
    { id: 14, title: "Twitter Clone", imgUrl: "/assets/react-twitter.png" },
    { id: 15, title: "Netflix Clone", imgUrl: "/assets/react-netflix.png" },
    { id: 16, title: "YouTube Clone", imgUrl: "/assets/react-yt.png" },
    { id: 17, title: "Amazon Clone", imgUrl: "/assets/react-amazon.png" },
    { id: 18, title: "Google Clone", imgUrl: "/assets/react-google.png" },
    { id: 19, title: "Spotify Clone", imgUrl: "/assets/react-spotify.png" },
    { id: 20, title: "Slack Clone", imgUrl: "/assets/react-slack.png" },
    { id: 21, title: "Tinder Clone", imgUrl: "/assets/react-tinder.png" },
    { id: 22, title: "Disney Plus Clone", imgUrl: "/assets/react-disney.png" },
    { id: 23, title: "LinkedIn Clone", imgUrl: "/assets/react-linkedin.png" },
  ];

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
