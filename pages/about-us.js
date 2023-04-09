import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AboutUs () {
    return(
        <>
        <Head>
            <title>SAR Marketing Group | About us</title>
            <meta name="About Us" content="Some information about our company and our goals." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
            <div className={styles.description}>
                <h1 className={inter.className}> About us </h1>
            </div>
        </main>

        </>
    )
}
