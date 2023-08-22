"use client"

import { useRouter } from 'next/navigation';
import styles from '../page.module.css'


const AboutComponent = ()=>{

    const router = useRouter()

    return (
        <main className={styles.main}>
            <h1>About page | routing</h1>
            <button onClick={()=>router.push('/')}>Go to home page</button>
        </main>
    )
}

export default AboutComponent;