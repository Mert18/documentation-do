import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Do, does your work.</h2>
      </div>
      <div>
        <Link href="/docs/getting-started">Go To Documentation</Link>
      </div>
    </div>
  )
}
