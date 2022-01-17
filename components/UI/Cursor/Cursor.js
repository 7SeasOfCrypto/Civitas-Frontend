import React from 'react';
import styles from './Cursor.module.scss'
import { useStoreUI } from '@/store/StoreUI'
  
const Cursor = () => {
    const {cursorPos,cursorType}=useStoreUI(state=>state)
    return (
        <div className={styles.cursorContainer}>
            <div className={styles.cursor} style={{top:`${cursorPos.y}px`,left:`${cursorPos.x}px`}}>
            <img src={cursorType==='Pointer'?'/Cursors/Pointer.webp':'/Cursors/PlaceCursor.webp'} alt='cursor' height='90px' width='90px'></img>
            </div>
        </div>
    );
};

export default Cursor;