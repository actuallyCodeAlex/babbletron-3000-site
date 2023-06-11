import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 id='title'>babbletron-3000</h1>
        <h2 id='date'>June 1, 2023</h2>
      </div>
    </main>
  )
}
