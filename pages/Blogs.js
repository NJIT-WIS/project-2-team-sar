import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>
        {allPostsData.map(({ title, excerpt, keyword }) => (
          <div key={keyword}>
            <Link href="/blog/[keyword]" as={'/posts/[keyword]`}>
              <a>
                <h2>{title}</h2>
              </a>
            </Link>
            <p>{excerpt}</p>
          </div>
        ))}
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
