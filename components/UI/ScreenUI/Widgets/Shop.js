import styles from './Shop.module.scss'
import {useState,useEffect} from 'react'


const Build = ({
    onClick = () => ''
}) => {
    
    return (
        <div className={styles.build} onClick={onClick}>
            <div className={`${styles.badge}`}>
                <span>
                    &#xe901;
                </span>
                <div className={styles.playerCenter}>
                    &#xe901;
                    <div className={styles.playerContent}>
                        <div>
                            <img src='/images/Shop.webp' width='85' height='64'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Build
