import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Dórea | Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Meus Apps</h1>
        <p><a href="https://brunodorea.github.io/">Bruno Dórea</a></p>
        <div className={styles.grid}>
          <a href="#" target="__blank" className={styles.card}>
            <h2>Cartão de Visitas &rarr;</h2>
            <p>App de cartão de visitas</p>
          </a>

          <a href="#" target="__blank" className={styles.card}>
            <h2>CoinConverter &rarr;</h2>
            <p>App de conversão de moedas e câmbio</p>
          </a>

          <a href="#" target="__blank" className={styles.card}>
            <h2>ToDo &rarr;</h2>
            <p>App de lembretes e tarefas</p>
          </a>

          <a href="#" target="__blank" className={styles.card}>
            <h2>SoccerNews &rarr;</h2>
            <p>App de noticias sobre futebol</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" >
          Powered by{' '}
          <span className={styles.logo}> <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> </span>
        </a>
      </footer>
    </div>
  )
}
