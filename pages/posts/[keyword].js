import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getAllKeywords, getPostData } from '../../lib/posts';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <main>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const keywords = getAllKeywords();
  const paths = keywords.map((keyword) => ({
    params: { keyword },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.keyword);
  return {
    props: {
      postData,
    },
  };
}
