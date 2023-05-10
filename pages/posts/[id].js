import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getAllPostIds, getPostData } from '../../lib/posts';
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
  const ids = getAllPostIds();
  const paths = ids.map((id) => ({
    params: { id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
