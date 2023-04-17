import Head from 'next/head'
import Header from '/project-2-team-sar/components/Header';
import Footer from '/project-2-team-sar/components/Footer';
import MyCard1 from '/project-2-team-sar/components/Card_1';
import MyCard2 from '/project-2-team-sar/components/Card_2';
import MyCard3 from '/project-2-team-sar/components/Card_3';

export default function Home() {
  return (
    <>
      <Head>
        <title>SAR Marketing Group</title>
        <meta name="description" content="Marketing group site created by  three college students." />
      </Head>
      <Header />
      <MyCard1 />
      <MyCard2 />
      <MyCard3 />
      <Footer />
    </>
  )
}
