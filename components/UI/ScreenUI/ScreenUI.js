import styles from './ScreenUI.module.scss';
import Player from './Widgets/Player'
import Build from './Widgets/Build'
import Shop from './Widgets/Shop'
import Token from './Widgets/Token'
const ScreenUI = () => {
    return (
        <div className={styles.overlay}>
            <Player></Player>
            <Build></Build>
            <Shop></Shop>
            <Token></Token>
        </div>
    );
};

export default ScreenUI;