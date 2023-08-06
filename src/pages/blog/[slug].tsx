import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { marked } from 'marked';
import Footer from '../../components/footer/footer';

export default function Page() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const markdownContent = Array.isArray(router.query.content)
    ? router.query.content[0] || ''
    : router.query.content || '';

  useEffect(() => {
    setContent(markdownContent);
  }, [markdownContent]);

  return (
    <div className="h-screen font-Montserrat flex flex-col">
      <main className="flex-1">
        <h1 className="text-6xl font-bold text-center">{router.query.title}</h1>
        <p className="font-bold text-center mt-4 mb-4 text-violet">Data: {router.query.date}</p>
        {content && (
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        )}
      </main>
      <Footer />
    </div>
  );
}
