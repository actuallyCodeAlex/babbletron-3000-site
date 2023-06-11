import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>babbletron-3000</h1>
        <h2 className={styles.date}>July 1, 2023</h2>
      </div>
    </main>
  )
}
