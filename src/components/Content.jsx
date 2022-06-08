import styled from "styled-components";

const Content = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.main`
  margin: 0 20px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  min-height: calc(100vh - 100px);
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Content;
