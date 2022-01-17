import {useEffect} from 'react'
import Head from 'next/head'
import Stage from '@/components/Stage'
import styles from '../styles/Play.module.css'
import UI from '@/components/UI/'
import {Stats} from '@react-three/drei'
import {useStore} from '@/store/Store'
import { useStoreUI } from '@/store/StoreUI'
import Cursor from '@/components/UI/Cursor'
import Modal from '@/components/UI/Modal'
export default function Play() {
  const {initMap}= useStore(state=>state.actions)
  const {cursorMove}=useStoreUI(state=>state.actions)

  useEffect(()=>{
    initMap()

  })
  
  useEffect(() => {
    document.addEventListener("mousemove", cursorMove);

    return () => {
      document.removeEventListener("mousemove", cursorMove);
    };
  },[cursorMove]);


  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Civitas Crypto Games</title>
        <meta name="description" content="Civitas Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.canvasContainer}>
        <Stage></Stage>
      </div>
      <UI></UI>
      <Stats showPanel={0} className="stats"  />
      
      <Cursor></Cursor>
      
    </div>
    <Modal></Modal></>
  )
}
