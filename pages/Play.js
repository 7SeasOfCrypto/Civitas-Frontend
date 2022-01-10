import Head from 'next/head'
import Stage from '@/components/Stage'
import styles from '../styles/Play.module.css'
import ScreenUI from '@/components/UI/ScreenUI'
import {Stats} from '@react-three/drei'
import {useStore} from '@/store/Store'
export default function Play() {
  const {initMap}= useStore(state=>state.actions)
  initMap()
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
      <Stats showPanel={0} className="stats"  />
      <ScreenUI></ScreenUI>
    </div>
  )
}
