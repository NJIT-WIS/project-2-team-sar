import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Services from '../components/boost_ai_career';

export default function ServicesPage() {
  return (
      <>
      <Head>
        <title>SAR Marketing Group</title>
        <meta name="description" content="Marketing group site created by three college students." />
      </Head>
      <Header />
      <Services />
      <Footer />
      </>
 )
}
