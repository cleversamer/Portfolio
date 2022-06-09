import styled from "styled-components";

const Skill = ({ number }) => {
  return (
    <Container number={number}>
      <Outer>
        <Inner>
          <Number>{number || 90}%</Number>
        </Inner>
      </Outer>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>

        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </Container>
  );
};

const Container = styled.article`
  width: 160px;
  height: 160px;
  position: relative;
  margin-top: 10px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 450;
    stroke-dashoffset: 450;
    animation: anim 2s linear forwards;
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: ${({ number }) => {
        number = Math.floor(number / 100);
        number -= 100;
        return 450 * number;
      }};
    }
  }
`;

const Outer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;

const Inner = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0 rgba(255, 255, 255, 1), 0.5px 0.5px 0 rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
`;

const Number = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #555;
`;

export default Skill;
