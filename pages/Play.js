import {useEffect} from 'react'
import Head from 'next/head'
import Stage from '@/components/Stage'
import styles from '../styles/Play.module.css'
import ScreenUI from '@/components/UI/ScreenUI'
import {Stats} from '@react-three/drei'
import {useStore} from '@/store/Store'
import { useStoreUI } from '@/store/StoreUI'
import Cursor from '@/components/UI/Cursor'
export default function Play() {
  const {initMap}= useStore(state=>state.actions)
  const {cursorMove}=useStoreUI(state=>state.actions)

  useEffect(()=>{
    initMap()

  })
  const onCursorMove=(e)=>{
    console.log("move")
  }
  useEffect(() => {
    document.addEventListener("mousemove", cursorMove);

    return () => {
      document.removeEventListener("mousemove", cursorMove);
    };
  },[cursorMove]);


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
      <Cursor></Cursor>
      <Stats showPanel={0} className="stats"  />
      <ScreenUI></ScreenUI>
    </div>
  )
}
