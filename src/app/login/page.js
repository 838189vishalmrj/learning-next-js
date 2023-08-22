
import Link from 'next/link'
import styles from '../page.module.css'

const page = () => {
  return (
    <main className={styles.main}>
        <h1>Basic Routing | Login Page</h1>
        <Link href={'/'}>Go to home page</Link>
    </main>
  )
}

export default page