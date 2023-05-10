import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';

export default function Post({ postData }) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(postData.date));

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <main>
        <h1>{postData.title}</h1>
        <p>{formattedDate}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
      <Footer />
    </>
  );
}
