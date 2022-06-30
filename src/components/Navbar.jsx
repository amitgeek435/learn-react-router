import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from "../images/bt.png";

const NavbarMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="info" expand="xxl">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="bt-logo"
              src={Image}
              //   src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" activeClassName="active_class">
                About
              </NavLink>
              <NavLink exact to="/contact" activeClassName="active_class">
                Contact
              </NavLink>
              <NavLink exact to="/user" activeClassName="active_class">
                User
              </NavLink>
              <NavLink exact to="/contact/name" activeClassName="active_class">
                Name Page
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarMenu;
