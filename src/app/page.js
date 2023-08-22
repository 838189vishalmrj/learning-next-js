import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <SayHelloWorld />
      <h1>hello next js</h1>
    </main>
  )
}


const SayHelloWorld = ()=>{
  return <h>Hello World</h>
}