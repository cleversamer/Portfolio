import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const Home = () => {
  return (
    <Container>
      <Navbar path="/" />

      <Content>
        <Headings>
          <WelcomingText>Hi there! I'm Samer A.⚡</WelcomingText>
          <Bio>A talented software engineer</Bio>
        </Headings>

        <CoverLetter>
          <Me>
            <Avatar src="/assets/avatar.jpg" alt="cleversamerr" />
          </Me>

          <Paragraph>
            <Line>
              Are you searching for a software engineer with a proven ability to
              develop high-performance, scalable, maintainable, and extensible
              applications, and technical innovations? If so, please consider my
              enclosed <a href="/assets/resume.pdf">resume.</a>
            </Line>

            <Line>
              I'm a passionate computer science student with strong knowledge
              and experience in web development, and with almost 3-years of
              experience, I can help you make your own web application in a
              professional way, and you can trust me in your business.
            </Line>

            <Line>
              My professional experience includes designing and crafting code
              for various web functions and then testing the resulting code to
              meet client needs. I also have experience working in a
              collaborative environment and presenting status updates to project
              stakeholders.
            </Line>

            <Line>
              And not only this! For more information about me, please visit the{" "}
              <Link to="/about">about page.</Link>
            </Line>
          </Paragraph>
        </CoverLetter>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Headings = styled.div``;

const WelcomingText = styled.h1`
  text-align: center;
  font-size: 24px;
`;

const Bio = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 5px;
  color: gray;
  text-transform: capitalize;

  &::before,
  &::after {
    content: "-";
    margin: 0 5px;
  }
`;

const CoverLetter = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const Me = styled.div`
  flex: 0.3;
`;

const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  flex: 0.7;
  color: #333;
  font-weight: 500;
  font-size: 15px;
`;

const Line = styled.span`
  display: block;
  margin-bottom: 20px;

  a {
    color: blue;
  }
`;

export default Home;
