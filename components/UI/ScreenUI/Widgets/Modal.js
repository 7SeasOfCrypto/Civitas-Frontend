import styles from './Modal.module.scss'
const Modal = ({
    children,
    title = 'Shop'
}) => {
    return (
        <div className={styles.modal}>
           <div className={styles.contentContainer}>
            <div className={styles.content}>
                <header className={styles.contentHeader}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.contentMain}>
                    {children}
                </div>
            </div>
           </div>
        </div>
    )
}

export default Modal