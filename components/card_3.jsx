import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyCard3 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src="https://iscanner.com/wp-content/uploads/2022/08/Blog_Post_ai_in_education_main_pic.png" alt="Puzzle" className="img-fluid rounded" style={{maxHeight: "500px"}} />
        </Col>
        <Col md={6}>
          <div className="my-3">
            <h3>The Future of Artificial Intelligence</h3>
            <p>Artificial intelligence (AI) is rapidly advancing and has the potential to revolutionize many industries and change the way we live and work. In the future, AI will be used to automate many tasks that are currently performed by humans, such as driving cars, diagnosing diseases, and even performing surgery.</p>
            <p> AI will also be used to create new products and services that we can’t even imagine yet. However, there are also concerns about the impact of AI on jobs and society as a whole. As AI continues to evolve, it’s important that we consider the ethical implications and work together to ensure that it benefits everyone.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard3;
