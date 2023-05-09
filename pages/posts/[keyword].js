import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { postsDirectory } from '../../lib/posts';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { title, date, content } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        <h1>{title}</h1>
        <div>{content}</div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => {
    const keyword = fileName.replace(/\.md$/, '');
    return {
      params: { keyword },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { keyword } = params;
  const fullPath = path.join(postsDirectory, `${keyword}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      post: {
        keyword,
        title: data.title,
        date: data.date,
        content,
      },
    },
  };
}
