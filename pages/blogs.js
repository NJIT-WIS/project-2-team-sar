import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Blog from '../components/blog_webpage_ai';
import { getSortedPostsData } from '../lib/posts';

export default function Blogs({ allPostsData }) {
  return (
    <>
      <Head>
         <title>SAR Marketing Group</title>
         <meta name="description" content="Marketing group site created by three college students." />
      </Head>
      <Header />
      <Services />
      <main>
        <Blog allPostsData={allPostsData} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
