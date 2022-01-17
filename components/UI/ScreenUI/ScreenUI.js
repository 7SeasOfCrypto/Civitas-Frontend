import styles from './ScreenUI.module.scss';
import Player from './Widgets/Player'
import Build from './Widgets/Build'
import Shop from './Widgets/Shop'
import Token from './Widgets/Token'
import {useStore} from '@/store/Store'
const ScreenUI = () => {
    const {isShopOpen} = useStore()
    return (
        <div className={styles.overlay}>
            <Player></Player>
            <Build></Build>
            <Shop onClick={() => setShopOpen(!isShopOpen)}></Shop>
            <Token></Token>
            {
                isShopOpen 
                ? <ShopModal/>
                : ''
            }
        </div>
    );
};

export default ScreenUI;