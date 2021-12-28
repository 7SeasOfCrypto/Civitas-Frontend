import styles from './Player.module.scss'

const Player = () => {
    return (
        <div className={styles.player}>



                <div className={`${styles.badge}`}>
                    <span>
                        hex
                    </span>
                    
                    <div className={styles.playerCenter}>
                        hex
                      
                        
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