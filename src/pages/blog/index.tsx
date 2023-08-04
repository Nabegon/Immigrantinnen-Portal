import { getSortedPostsData } from '../../../lib/posts'
import Link from 'next/link'
import Footer from '../../components/footer/footer';


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
    <h1 className="text-6xl font-bold text-center">Mehr Empowerment für Migrantinnen</h1>
    <p style={{ wordBreak: 'break-all' }} className="text-center">Hier findest du Blogs und Nachrichten über Migrantinnen.</p>
    <ul>
      {allPostsData.map(({ props: { id, frontMatter, content } }:any) => (
          <li key={id}>
            <div className="grid grid-cols-10 gap-2 flex justify-start items-end">
              <div className="bg-container-gray mr-2 col-span-10 row-start-6 flex flex-col justify-between items-start h-64">
                <p className="text-4xl font-bold text-center">{frontMatter.title}</p>
                <button className="bg-violet hover:bg-hover-violet text-white text-xl px-4 py-2 w-56 ml-14">
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