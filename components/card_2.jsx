import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyCard2 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div className="my-3">
            <h3>Artificial Intelligence: The Future is Here</h3>
            <p>Artificial intelligence (AI) is a field of computer science that focuses on the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.</p>
            <p>AI is a rapidly growing field that has the potential to revolutionize many industries and change the way we live and work.</p>
          </div>
        </Col>
        <Col md={6}>
          <img src="https://observatory.tec.mx/wp-content/uploads/2020/08/ArtificialIntelligenceinEducation.jpg" alt="AI Robot" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard2;
