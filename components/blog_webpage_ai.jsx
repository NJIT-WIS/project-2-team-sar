import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Embracing the Agile Mindset in Education: A Paradigm Shift',
      excerpt: 'Agile methodologies have revolutionized the software development industry. This post discusses how the Agile mindset can lead to a paradigm shift in education, emphasizing adaptability and continuous improvement in teaching and learning practices.',
    },
    {
      title: 'Lean Principles in the Classroom: Maximizing Efficiency and Learning Outcomes',
      excerpt: 'Lean principles focus on reducing waste and optimizing processes. This post explores how Lean principles can be applied in the classroom to maximize efficiency, enhance learning outcomes, and create a more effective learning environment.',
    },
    {
      title: 'The Role of Neuroscience in Shaping Modern Education Practices',
      excerpt: 'Discover how neuroscience research is shaping modern education practices, providing insights into how the brain learns and processes information, and helping educators develop more effective teaching strategies.',
    },
    {
      title: 'Preparing Students for the AI-Driven World: Essential Skills for Success',
      excerpt: 'As AI continues to transform industries, it is crucial to prepare students for the AI-driven world. This post outlines the essential skills students need for success, such as critical thinking, problem-solving, and adaptability.',
    },
    {
      title: 'The Importance of Interdisciplinary Learning in the 21st Century',
      excerpt: 'Interdisciplinary learning helps students develop a more comprehensive understanding of complex real-world problems. This post highlights the importance of interdisciplinary learning and how it prepares students for the challenges of the 21st century.',
    },
    {
      title: 'Project-Based Learning: Engaging Students in Real-World Problem Solving',
      excerpt: 'Project-based learning (PBL) is an effective educational approach that engages students in real-world problem-solving. This post explores the benefits of PBL, such as promoting collaboration, critical thinking, and creativity.',
    },
    {
      title: 'Personalized Learning Plans: Empowering Students through Adaptive Education',
      excerpt: 'Personalized learning plans empower students by tailoring education to their unique needs, goals, and learning styles. This post discusses the benefits of adaptive education and provides strategies for implementing personalized learning plans in the classroom.',
    },
    {
      title: 'Fostering a Culture of Continuous Improvement in Education',
      excerpt: 'Continuous improvement is key to driving innovation and enhancing educational outcomes. This post shares strategies for fostering a culture of continuous improvement in education, such as setting clear goals, collecting feedback, and encouraging collaboration.',
    },
    {
      title: 'The Power of Collaboration: Building a Network of Innovative Educators',
      excerpt: 'Collaboration is essential for innovation in education. This post discusses the power of collaboration among educators and provides tips for building a network of innovative educators to share ideas, resources, and best practices.',
    },
    {
      title: 'Overcoming Cognitive and Mental Health Challenges in Today\'s Classrooms',
      excerpt: 'Cognitive and mental health challenges can impact students\' learning experiences. This post explores strategies for addressing these challenges in today\'s classrooms, promoting well-being, and creating an inclusive learning environment.',
    },
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Insights and Perspectives: Exploring AI Education and Best Practices</h1>
        </Col>
      </Row>
      <Row>
        {blogPosts.map((post, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.excerpt}
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
