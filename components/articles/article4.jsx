import React from 'react';
import resources from '!!raw-loader!markdown-loader!/markdown-files/article4.md';
import { Container, Row, Col } from 'react-bootstrap';

const Article4 = () => {
  return (
    <Container className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: resources }}></div>
    </Container>
  );
};

export default Article4;
