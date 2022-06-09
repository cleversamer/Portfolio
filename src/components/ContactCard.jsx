/* eslint-disable react/jsx-no-target-blank */
import styled from "styled-components";

const ContactCard = ({ path, alt, url }) => {
  const isLocalPath = (p) => p.charAt(0) === "/";

  return (
    <Container>
      <a href={url} target={isLocalPath(url) ? "_self" : "_blank"}>
        <BackgroundImg src={path} alt={alt} />
      </a>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition-duration: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(0.99);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default ContactCard;
