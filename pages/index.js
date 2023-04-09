import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Web Class</title>
        <meta name="description" content="Marketing site created for My Web Class site by three college students." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a href="/about-us" target="About us page" >
            <p className={inter.className}>
              About Us
            </p>
          </a>
        </div>

        <div className={styles.grid}>
          <a
            href="/about-us"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Some information about our company.
            </p>
          </a>

          <a
            href="/Policy"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Privacy Policy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              More information on our Privacy policy.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Resources <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Resources used during this project.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Services <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about our services.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
