import styles from './ScreenUI.module.scss';
import Player from './Widgets/Player'
import Build from './Widgets/Build'
import Shop from './Widgets/Shop'
import Token from './Widgets/Token'
import Modal from './Widgets/Modal'
import {useState} from 'react'
const ScreenUI = () => {
    const [isShopOpen,setShopOpen] = useState(false);
    return (
        <div className={styles.overlay}>
            <Player></Player>
            <Build></Build>
            <Shop onClick={() => setShopOpen(!isShopOpen)}></Shop>
            <Token></Token>
            {
                isShopOpen 
                ? <Modal/>
                : ''
            }
        </div>
    );
};

export default ScreenUI;