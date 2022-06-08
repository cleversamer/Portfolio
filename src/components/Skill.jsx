import styled from "styled-components";
import Progress from "./Progress";

const Skill = ({ name, number, imgUrl }) => {
  return (
    <Container>
      <SkillLogo src={imgUrl} alt={name} />
      <Progress number={number} />
    </Container>
  );
};

const Container = styled.article`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    transform: scale(0.75);
  }
`;

const SkillLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: inline-block;
  margin: 0 auto;
`;

export default Skill;
