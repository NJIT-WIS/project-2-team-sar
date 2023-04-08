import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyCard3 = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src="https://picsum.photos/600" alt="Example" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <div className="my-3">
            <h3>Example Card</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat ante sit amet eros faucibus, vel euismod tortor varius. Integer id lectus vel felis sodales sollicitudin. Fusce faucibus urna ac velit interdum, non mattis arcu elementum.</p>
            <p>Donec a luctus augue. Mauris id nisl vel ipsum ultricies bibendum eu quis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur et ante vitae magna eleifend hendrerit at id sem.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard3;
