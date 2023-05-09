import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Boost Your AI Career with MyWebClass.org</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Professional Career Development Opportunities</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Certification Programs: AI Engineer, Data Scientist, and ML Specialist</ListGroup.Item>
                <ListGroup.Item>Industry Partnerships: Collaborate now with top AI companies</ListGroup.Item>
                <ListGroup.Item>Mentorship Programs: Connect with experienced AI professionals</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3">Learn More Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Customized AI Training & Support</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Flexible Delivery Options: Online, on-site, and blended learning formats</ListGroup.Item>
                <ListGroup.Item>Personalized Learning Plans: Tailored to your needs, goals, and learning style</ListGroup.Item>
                <ListGroup.Item>Comprehensive Support: Dedicated support team and access to a resource library</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3">Learn More Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Email: support@mywebclass.org</ListGroup.Item>
                <ListGroup.Item>Phone: (123) 456-7890</ListGroup.Item>
                <ListGroup.Item>Social Media: Facebook, Twitter, LinkedIn</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3">Get in Touch Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
