import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
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

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyWebClass.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="/project-2-team-sar/mailchimp_integration">Subscribe</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
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
