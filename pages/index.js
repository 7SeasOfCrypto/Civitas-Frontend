import isPositionAvailable from '../utils/isPositionAvailable'
import styles from '../styles/Home.module.css'
import Toolbar from '@/components/UI/Toolbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Toolbar/>
    </div>
  )
}
