import React from 'react';
import resources from '!!raw-loader!markdown-loader!/markdown-files/resources.md';
import { Container, Row, Col } from 'react-bootstrap';

const ResourcesPage = () => {

  return (
    <Container className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: resources }}></div>
    </Container>
  );
}
export default ResourcesPage;