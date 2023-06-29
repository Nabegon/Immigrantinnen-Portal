import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return (
    <div>
      <p>Title: {router.query.title}</p>
      <p>Data: {router.query.date}</p>
      <p>Content: {router.query.content}</p>
    </div>
  )
}