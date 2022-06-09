import styled from "styled-components";
import Progress from "./Progress";

const Skill = ({ name, number, imgUrl }) => {
  return (
    <Container>
      <SkillInfo>
        <SkillLogo src={imgUrl} alt={name} />
        <SkillHeading>{name}</SkillHeading>
      </SkillInfo>

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

const SkillInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: inline-block;
  margin-right: 5px;
`;

const SkillHeading = styled.h4`
  font-size: 20px;
  color: #333;
`;

export default Skill;
