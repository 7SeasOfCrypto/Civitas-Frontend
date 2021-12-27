import styles from './Toolbar.module.css'

const Toolbar = () => {
    return(
        <div className={styles.toolbarContainer}>
            <div className={styles.buildingOptionsContainer}>
                <h4>Building Options</h4>
                <button>
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