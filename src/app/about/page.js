"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';


const AboutComponent = ()=>{

    const router = useRouter()

    return (
        <>
            <h1>About page | routing</h1>
            <button onClick={()=>router.push('/')}>Go to home page</button>
            <br />
            <Link href={'/about/aboutStudents'}> Go to about students page</Link>
            <br />
            <Link href={'/about/aboutCollege'}> Go to about College page</Link>
        </>
    )
}

export default AboutComponent;