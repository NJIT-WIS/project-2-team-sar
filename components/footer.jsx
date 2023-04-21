import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from 'next/Link';



const Footer = () => {
  return (
    
    <footer className="bg-light py-0 fixed-bottom">
      <Container>
        <Row>
          <Col md={4}>
            <ul class="list-inline">
              <li class="list-inline-item">
                <Link href="/aboutus" class="text-dark text-decoration-none">About Us</Link>
              </li>
              <li class="list-inline-item">
                <Link href="/policy" class="text-dark text-decoration-none"> Privacy Policy</Link>             
              </li>
            </ul>
          </Col>
          <Col md={4}>
          <h5>Connect with us:</h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com" className="text-dark text-decoration-none"><i className="fab fa-facebook fa-lg"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com" className="text-dark text-decoration-none"><i className="fab fa-twitter fa-lg"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com" className="text-dark text-decoration-none"><i className="fab fa-instagram fa-lg"></i></a>
          </li>
        </ul>
          </Col>
          <Col md={4}>
        <h5>Contact us:</h5>
        <address className="text-secondary">
          123 Main Street, New York, NY 10001<br />
          Email: <a href="mailto:info@example.com" className="text-secondary text-decoration-none">info@example.com</a><br />
          Phone: (123) 456-7890
        </address>
      </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Example Company, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  
  );
};

export default Footer;
