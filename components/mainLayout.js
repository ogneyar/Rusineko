import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function MainLayout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>РусИнЭко</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <h1 className={styles.title}>
                    
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/post">
                        <a>Post</a>
                    </Link>
                   
                </h1>
            </nav>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                
                Powered by{' '}<h3>Ogneyar</h3>

            </footer>
        </div>
    )
}