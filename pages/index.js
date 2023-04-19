import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import Card_1 from '../components/card_1';
import Card_2 from '../components/card_2';
import Card_3 from '../components/card_3';

export default function Home() {
  return (
    <>
      <Head>
        <title>SAR Marketing Group</title>
        <meta name="description" content="Marketing group site created by  three college students." />
      </Head>
      <Header/>
      <Card_1/>
      <Card_2/>
      <Card_3/>
      <Footer/>
    </>
  )
}
