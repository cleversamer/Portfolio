import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = ({ id, title, imgUrl }) => {
  return (
    <Link to={`/project/${id}`}>
      <Container>
        <Heading>{title || "No title"}</Heading>
        <BackgroundImg src={imgUrl} alt={title} />
      </Container>
    </Link>
  );
};

const Container = styled.article`
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
  transition-duration: 167ms;

  :hover {
    transform: scale(0.99);
  }

  :active {
    transform: scale(0.98);
  }
`;

const Heading = styled.h4`
  text-align: center;
  margin-bottom: 7px;
  color: #333;
  font-size: 1rem;
`;

const BackgroundImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default Project;
