import { getSortedPostsData } from '../../../lib/posts'
import Link from 'next/link'

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
    <div>
      <h1>My Blog</h1>
      <ul>
      {allPostsData.map(({ props: { id, frontMatter, content } }:any) => (
          <li key={id}>
           <Link
            href={{
              pathname: '/blog/[slug]',
              query: { slug: id, content: content, title: frontMatter.title, date: frontMatter.date },
            }}
          >
            {frontMatter.title}, {frontMatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
