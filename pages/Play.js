import Head from 'next/head'
import Stage from '@/components/Stage'
import styles from '../styles/Play.module.css'
import Toolbar from '@/components/UI/Toolbar'
export default function Play() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Civitas Crypto Games</title>
        <meta name="description" content="Civitas Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.canvasContainer}>
        <Stage></Stage>
      </div>
      <div>
        <Toolbar/>
      </div>
   
    </div>
  )
}
