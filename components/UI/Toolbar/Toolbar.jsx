import styles from './Toolbar.module.css'
import {useStore} from 'store'
const Toolbar = () => {
    const {hasPlaceMarker,showPlaceMarker} = useStore()

   console.log(hasPlaceMarker)
    const buildHouse = (value) => {
        showPlaceMarker(value)
    }
    return(
        <div className={styles.toolbarContainer}>
            <div className={styles.buildingOptionsContainer}>
                <h4>Building Options</h4>
                <button onClick={() => buildHouse(!hasPlaceMarker)}>
                    Create House
                </button>
                <button>
                    Delete House
                </button>
            </div>
        </div>
    )
}

export default Toolbar