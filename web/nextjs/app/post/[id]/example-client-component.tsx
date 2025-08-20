'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
    const router = useRouter()
    console.log(router);
    
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}