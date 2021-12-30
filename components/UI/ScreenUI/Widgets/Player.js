import styles from './Player.module.scss'
import {useState,useEffect} from 'react'


const Player = () => {
    const [progress,setProgress]=useState(100)

    
    
    const colors=['#f63a0f','#f27011','#f2b01e','#f2d31b','#86e01e']
    const colorBar=colors[Math.floor((progress*100/101)/20)]
        
    
    
    
    const changeProgress=()=>{
        setProgress((progress+1)%101)
    }
    return (
        <div className={styles.player}>
            <div className={`${styles.badge}`}>
                <span>
                    &#xe900;
                </span>
                <div className={styles.playerCenter}>
                &#xe900;
                    <div className={styles.playerContent}>
                        <div>
                            <span>1</span>

                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.playerInfo}>
                <span>PlayerName</span>
                <div>
                <div className={styles.coinInfo}>
                    <img src='/images/coin.webp' width="35px" height="35px"></img>134.555</div>
                </div>

            </div>
            <div className={styles.expBar} onClick={changeProgress}>
                <div className={styles.progress}>
                    <div className={styles.progressBar} style={{width:`${progress%101}%`,backgroundColor:colorBar}}></div>
                </div>
            </div>
        </div>
    )
}

export default Player

/*
<div className={`${styles.badge} ${styles.orange} ${styles.gold}`}>
                <div className={styles.circle}> 1</div>
                <div className={styles.ribbon}>Initiator</div>
            </div>

            */