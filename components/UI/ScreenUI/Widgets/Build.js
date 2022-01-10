import styles from './Build.module.scss'
import { useStore } from '@/store/Store'
import {useState,useEffect} from 'react'


const Build = () => {
    const {enterAddMode}=useStore(state=>state.actions)
    const {isActive}=useStore(state=>state.addMode)

    const clickBuild=()=>{
        if(isActive)
            leaveAddMode(1)
        else
            enterAddMode(1)
    }
    return (
        <div className={styles.build} onClick={clickBuild}>
            <div className={`${styles.badge}`}>
                <span>
                    &#xe901;
                </span>
                <div className={styles.playerCenter}>
                    &#xe901;
                    <div className={styles.playerContent}>
                        <div>
                            <img src='/images/Hammer.webp' width='77' height='73' alt='addBuilding'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Build
