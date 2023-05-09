import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css'

function addGoogleTranslateScript() {
  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

function initializeGoogleTranslate() {
  new window.google.translate.TranslateElement(
    { pageLanguage: 'en', includedLanguages: 'en,es,fr', layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, autoDisplay: false },
    'google-translate'
  );
}

function Header() {
    useEffect(() => {
        addGoogleTranslateScript();
        window.googleTranslateElementInit = initializeGoogleTranslate;
      }, []);
const router = useRouter();
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://njit-wis.github.io/project-2-team-sar/">
        <i className="fas fa-globe icon-spacing mr-2"></i>
         MyWebClass</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/project-2-team-sar/resources" active={router.pathname === '/project-2-team-sar/resources'}>Resources</Nav.Link>
            <Nav.Link href="/project-2-team-sar/Services">Services</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="/project-2-team-sar/subscribe">Subscribe</Nav.Link>
            <Nav.Link style={{ marginLeft: "30px" }}>
              <div id="google-translate"></div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header;
