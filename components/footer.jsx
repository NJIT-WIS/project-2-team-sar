import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
 <footer className="navbar navbar-dark bg-dark">
  <Container className="border-bottom border-gray text-muted">
    <Row className="mx-auto" >
      <Col md={4}>
        <ul className="nav col-6">
          <li className="nav-item">
            <Link href="/aboutus" className="nav-link active text-muted text-decoration-underline" aria-current="page">About Us</Link>
          </li>
          <li className="list-inline-item">
            <Link href="../Services" className="nav-link active text-muted text-decoration-underline" aria-current="page">Services</Link>
          </li>
          <li className="list-inline-item">
            <Link href="../resources" className="nav-link active text-muted text-decoration-underline" aria-current="page">Resources</Link>
          </li>
          <li className="list-inline-item">
            <Link href="../blogs" className="nav-link active text-muted text-decoration-underline" aria-current="page">Blogs</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/privacy" className="nav-link active text-muted text-decoration-underline" aria-current="page">Privacy Policy</Link>
          </li>
        </ul>
      </Col>
      <Col md={4}>
        <h5 className="text-muted">Connect with us:</h5>
        <a href="https://www.facebook.com" style={{ marginRight: '10px' }}><i className="fab fa-facebook fa-2x text-muted"></i></a>
        <a href="https://www.twitter.com" style={{ marginRight: '10px' }}><i className="fab fa-twitter fa-2x text-muted"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x text-muted"></i></a>
      </Col>
      <Col md={4}>
        <h5 className="text-muted">Contact us:</h5>
        <p className="text-muted">254 Main Street, New York, NY 10001</p>
        <p className="text-muted">Email: support@mywebclass.org</p>
        <p className="text-muted">Phone: (235) 456-7890</p>
      </Col>
    </Row>

  </Container>
  <Container className="d-flex justify-content-center">
        <p className="text-light">&copy; {new Date().getFullYear()} MYWEBCLASS Company, Inc. All rights reserved.</p>
  </Container>
</footer>
  );
};

export default Footer;
