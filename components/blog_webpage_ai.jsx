import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Embracing the Agile Mindset in Education: A Paradigm Shift',
      excerpt: 'Agile methodologies have revolutionized the software development industry. This post discusses how the Agile mindset can lead to a paradigm shift in education, emphasizing adaptability and continuous improvement in teaching and learning practices. Expert Quote: "Education must become more agile and adaptive to prepare students for an uncertain future." - Dr. Jane Smith, Educational Innovator',
    },
    {
      title: 'Lean Principles in the Classroom: Maximizing Efficiency and Learning Outcomes',
      excerpt: 'Lean principles focus on reducing waste and optimizing processes. This post explores how Lean principles can be applied in the classroom to maximize efficiency, enhance learning outcomes, and create a more effective learning environment. Expert Quote: "Applying Lean principles to education can help us eliminate non-value-adding activities, giving more time for meaningful learning." - Prof. Michael Johnson, Lean Education Expert',
    },
    {
      title: 'The Role of Neuroscience in Shaping Modern Education Practices',
      excerpt: 'Discover how neuroscience research is shaping modern education practices, providing insights into how the brain learns and processes information, and helping educators develop more effective teaching strategies. Expert Quote: "Understanding the science of learning can help educators create more brain-friendly classrooms and improve student outcomes." - Dr. Sarah Brown, Neuroscientist',
    },
    {
      title: 'Preparing Students for the AI-Driven World: Essential Skills for Success',
      excerpt: 'As AI continues to transform industries, it is crucial to prepare students for the AI-driven world. This post outlines the essential skills students need for success, such as critical thinking, problem-solving, and adaptability. Expert Quote: "Developing students\' adaptability and critical thinking skills is essential to help them succeed in the AI-driven future." - Dr. James White, AI in Education Specialist',
    },
    {
      title: 'The Importance of Interdisciplinary Learning in the 21st Century',
      excerpt: 'Interdisciplinary learning helps students develop a more comprehensive understanding of complex real-world problems. This post highlights the importance of interdisciplinary learning and how it prepares students for the challenges of the 21st century. Expert Quote: "Interdisciplinary learning breaks down the silos between subjects, fostering creativity and innovation." - Dr. Lisa Chen, Interdisciplinary Learning Advocate',
    },
    {
      title: 'Project-Based Learning: Engaging Students in Real-World Problem Solving',
      excerpt: 'Project-based learning (PBL) is an effective educational approach that engages students in real-world problem-solving. This post explores the benefits of PBL, such as promoting collaboration, critical thinking, and creativity. Expert Quote: "Project-based learning encourages students to take ownership of their learning and apply their knowledge to real-world challenges." - Prof. Mark Thompson, PBL Expert',
    },
    {
      title: 'Personalized Learning Plans: Empowering Students through Adaptive Education',
      excerpt: 'Personalized learning plans empower students by tailoring education to their unique needs, goals, and learning styles. This post discusses the benefits of adaptive education and provides strategies for implementing personalized learning plans in the classroom. Expert Quote: "Personalized learning plans allow students to learn at their own pace, ensuring that no one is left behind." - Dr. Susan Lee, Educational Psychologist',
    },
    {
      title: 'Fostering a Culture of Continuous Improvement in Education',
      excerpt: 'Continuous improvement is key to driving innovation and enhancing educational outcomes. This post shares strategies for fostering a culture of continuous improvement in education, such as setting clear goals, collecting feedback, and encouraging collaboration. Expert Quote: "A culture of continuous improvement helps schools adapt to the ever-changing needs of students and society." - Dr. Emily Green, Education Consultant',
    },
    {
      title: 'The Power of Collaboration: Building a Network of Innovative Educators',
      excerpt: 'Collaboration is essential for innovation in education. This post discusses the power of collaboration among educators and provides tips for building a network of innovative educators to share ideas, resources, and best practices. Expert Quote: "Collaborative networks enable educators to share resources and ideas, leading to more effective and innovative teaching practices." - Prof. Karen Mitchell, Educational Leadership Expert',
    },
    {
      title: 'Overcoming Cognitive and Mental Health Challenges in Today\'s Classrooms',
      excerpt: 'Cognitive and mental health challenges can impact students\' learning experiences. This post explores strategies for addressing these challenges in today\'s classrooms, promoting well-being, and creating an inclusive learning environment. Expert Quote: "Supporting students\' mental health and well-being is essential for creating an inclusive and nurturing learning environment." - Dr. Laura Simmons, Clinical Psychologist',
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
                <Link to={`/blog/${index}`}>
                  <Button variant="primary">Read More</Button>
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
