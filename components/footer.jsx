import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="bg-light py-1">
      <Container>
        <Row>
          <Col md={4}>
            <ul className="nav">
              <li className="nav-item">
                <Link href="/aboutus" className="nav-link active" aria-current="page">About Us</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/privacy" className="nav-link active" aria-current="page">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect with us:</h5>
            <a href="https://www.facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
          </Col>
          <Col md={4}>
            <h5>Contact us:</h5>
            <p>123 Main Street, New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3 py-2">
            <p>&copy; {new Date().getFullYear()} Example Company, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
