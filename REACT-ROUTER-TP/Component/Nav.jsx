import styled from "styled-components";
import { Link } from "react-router-dom";

const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

  > li > a {
    color: red;
    text-decoration: none;
    padding: 5px 10px;
    display: block;
    width: 100px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 22px;
    text-align: center;
    :hover {
      background: #e277e6;
      color: #fff;
    }
  }
`;

const NavBar = styled.nav`
  padding: 20px 0;
  border-bottom: 2px solid #000;
`;

function Nav() {
  return (
    <NavBar>
      <NavUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </NavUl>
    </NavBar>
  );
}

export default Nav;
