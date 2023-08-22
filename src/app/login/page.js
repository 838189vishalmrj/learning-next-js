"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();

  const navigate = (name)=>{
    router.push('/login/'+name)
  }
  return (
    <>
        <h1>Basic Routing | Login Page</h1>
        <Link href={'/'}>Go to home page</Link>
        <br />
        <br />
        <button onClick={()=>navigate('loginStudents')}>Go to Students login page</button>
        <br />
        <button onClick={()=>navigate('loginTeacher')}>Go to Teacher login page</button>
    </>
  )
}

export default page