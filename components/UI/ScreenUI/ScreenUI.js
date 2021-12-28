import styles from './ScreenUI.module.scss';
import Player from './Widgets/Player'
const ScreenUI = () => {
    return (
        <div className={styles.overlay}>
            <Player></Player>
        </div>
    );
};

export default ScreenUI;