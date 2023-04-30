import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Resources from '../components/resources'
import EmailForm from '../components/mailchimp_integration.jsx';

function Subscribe() {
  return (
    <Container>
      <h1>Subscribe to Our Newsletter</h1>
      <EmailForm />
    </Container>
  );
}

export default Subscribe;
