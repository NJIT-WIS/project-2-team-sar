import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://njit-wis.github.io/project-2-team-sar/">MyWebClass.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#subscribe">Subscribe</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
