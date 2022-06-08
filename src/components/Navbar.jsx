import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ path }) => {
  return (
    <Container>
      <Content>
        <Avatar src="/assets/avatar.jpg" alt="cleversamerr" />

        <NavList>
          <NavItem badge={path === "/about"}>
            <Link to="/about">About</Link>
          </NavItem>

          <NavItem badge={path === "/contact"}>
            <Link to="/">Contact</Link>
          </NavItem>

          <NavItem badge={path === "/skills"}>
            <Link to="/">Skills</Link>
          </NavItem>

          <NavItem badge={path === "/portfolio"}>
            <Link to="/">Portfolio</Link>
          </NavItem>

          <NavItem badge={path === "/events"}>
            <Link to="/">Challenges & Events</Link>
          </NavItem>
        </NavList>
      </Content>
    </Container>
  );
};

const Container = styled.nav`
  padding: 10px 20px;
`;

const Content = styled.div`
  background-image: url("assets/liquid-cheese.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.img`
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5vw;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavItem = styled.li`
  border-radius: 50px;
  background-color: ${({ badge }) => badge && "#11aaaa"};
  min-width: fit-content;
  padding: 3px 7px;

  a {
    font-size: 15px;
    font-weight: 500;
    color: ${({ badge }) => (badge ? "#fff" : "#333")};
    padding: 10px 15px;

    @media screen and (max-width: 767px) {
      padding: 10px;
    }
  }
`;

export default Navbar;
