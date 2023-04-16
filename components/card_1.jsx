import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyCard1 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/07/Artificial-Intelligence-Trends.jpeg" alt="AI" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <div className="my-3">
            <h3>Artificial Intelligence</h3>
            <p>Artificial Intelligence, or AI, is the ability of machines to perform tasks that typically require human-like intelligence. These tasks can include things like visual perception, speech recognition, decision-making, and language translation.</p>
            <p>The field of AI is rapidly expanding and has the potential to revolutionize many industries, from healthcare to finance to transportation. However, there are also concerns about the potential negative impacts of AI, such as job displacement and loss of privacy.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard1;
