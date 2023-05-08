import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import EmailForm from '../components/mailchimp_integration'
import { Container } from 'react-bootstrap';

export default function Subscribe() {
  return (
       <>
      <Head>
        <title>SAR Marketing Group</title>
        <meta name="description" content="Marketing group site created by  three college students." />
      </Head>
      <Header/>
      <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>Subscribe to Our Newsletter</h1>
      </Container>

      <Container>
          <EmailForm />
      </Container>
      <Footer/>
      </>
  );
}
