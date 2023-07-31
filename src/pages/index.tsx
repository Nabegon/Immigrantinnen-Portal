import * as React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer/footer';
import { getSortedPostsData } from '../../lib/posts'

type Post = {
  props: {
    id: string;
    date: string;
    frontMatter: {
      title: string;
    };
    content: string;
  }
};

type HomeProps = {
  allPostsData: Post[];
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  const interviewPosts = allPostsData
  .filter((post) => post.props.frontMatter)
  .slice(0, 2)
  return (
    <div className="h-screen font-Montserrat md:flex flex-col">
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2 flex justify-start items-end">
          <div className="md:col-span-3 md:row-span-6 md:row-start-6 flex flex-col justify-between items-start md:h-64">
            <p className="text-4xl font-bold text-center m-5 md:m-0">Empowerment&nbsp; von Migrantinnen</p>
            <p className="text-center m-0 md:m-2">Einfacher Guide zu Rechten, Ressourcen und Möglichkeiten</p>
            <button className="bg-violet hover:bg-hover-violet text-white text-xl px-1 py-2 w-56 m-16">
              <Link href="/frauenrechte">
                Mehr Infos
              </Link>
            </button>
          </div>
          <div className="col-span-1 md:col-span-7 md:row-span-6 md:row-start-6 bg-container-gray h-40 md:h-96 border border-black-500">
            <img src="/top-page-image.svg" alt="Logo" className="h-full w-full" />
          </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Frauenrechte</p>
            <button className="bg-violet hover:bg-hover-violet text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/frauenrechte">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Beratung</p>
            <button className="bg-violet hover:bg-hover-violet text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/beratung">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Job-Hilfe</p>
            <button className="bg-violet hover:bg-hover-violet text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/job-hilfe">
                Mehr wissen
              </Link>
            </button>
          </div>
          <div className="bg-container-gray flex flex-col justify-between items-start h-40 md:h-96">
            <p className="self-start text-4xl font-bold">Deutsch lernen</p>
            <button className="bg-violet hover:bg-hover-violet text-white text-xl px-4 py-2 w-56 mb-2 mx-2">
              <Link href="/deutsch-lernen">
                Mehr wissen
              </Link>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-items-center items-center">
        {interviewPosts.map((post) => (
        <div key={post.props.id} className="bg-container-gray flex justify-center items-center w-full md:w-96 h-40 md:h-96">
          
          <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: post.props.id, content: post.props.content, title: post.props.frontMatter.title, date: post.props.frontMatter.date },
                }}
              >
               <p className="text-4xl font-bold text-center">{post.props.frontMatter.title}</p>
            </Link>
        </div>
      ))}
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
