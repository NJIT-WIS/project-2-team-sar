import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const Blog = ({ allPostsData }) => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Insights and Perspectives: Exploring AI Education and Best Practices</h1>
        </Col>
      </Row>
      <Row>
        {allPostsData.map((post, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Link href={`/posts/${post.id}`}>
                  <Button variant="primary" role="link">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
