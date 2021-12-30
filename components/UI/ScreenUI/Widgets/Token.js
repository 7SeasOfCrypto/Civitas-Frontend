import styles from './Token.module.scss'
import {useState,useEffect} from 'react'


const Build = () => {
    

    
    
    
    return (
        <div className={styles.build}>
            <div className={`${styles.badge}`}>
                <span>
                    &#xe901;
                </span>
                <div className={styles.playerCenter}>
                 &#xe901;
                    <div className={styles.playerContent}>
                        <div className={styles.add}>
                          +

                        </div>
                    </div>

                </div>

            </div>
   
        </div>
    )
}

export default Build
