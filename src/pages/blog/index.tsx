import { getSortedPostsData } from '../../../lib/posts'
import Link from 'next/link'
import Footer from '../../components/footer/footer';

type Post = {
  id: string;
  date: string;
  title: string;
  content: string;
};

type BlogIndexProps = {
  allPostsData: Post[];
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function BlogIndex({ allPostsData }:any) {
  return (
    <div className="h-screen font-Montserrat flex flex-col">
    <main className="flex-1">
    <h1 className="text-6xl font-bold text-center">Ihre Rechte <br></br>als Migrantinnen in Deutschland</h1>
    <p  className="text-3xl font-bold text-center mt-4 mb-4 text-violet">Überblick über das Thema</p>
    <p style={{ wordBreak: 'break-all' }}>TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</p>
    <ul>
      {allPostsData.map(({ props: { id, frontMatter, content } }:any) => (
          <li key={id}>
            <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
              <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
                <p className="text-4xl font-bold text-center">{frontMatter.title}</p>
                <button className="bg-violet hover:bg-violet-500 text-white text-xl px-4 py-2 w-56 ml-14">
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: id, content: content, title: frontMatter.title, date: frontMatter.date },
                }}
              >
                Mehr lesen
                </Link>
            </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </div>
  );
};
