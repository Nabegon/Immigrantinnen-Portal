import { useRouter } from 'next/router'
import Footer from '../../components/footer/footer';
 
export default function Page() {
  const router = useRouter()
  return (
    <div className="h-screen font-Montserrat flex flex-col">
    <main className="flex-1">
      <h1 className="text-6xl font-bold text-center">{router.query.title}</h1>
      <p  className="font-bold text-center mt-4 mb-4 text-violet">Data: {router.query.date}</p>
      <p style={{ wordBreak: 'break-all' }}>{router.query.content}</p>
    </main>
    <Footer />
  </div>
  );
};