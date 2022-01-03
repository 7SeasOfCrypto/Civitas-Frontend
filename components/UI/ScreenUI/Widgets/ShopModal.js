import Modal from './Modal'
import { useStore } from '@/store/Store'
const ShopModal = () => {
    const {myBuildings} = useStore()
    return (
        <Modal title="Shop">
            <ul>
                {
                    myBuildings.map((build) => (
                        <li>
                            <h4>{build.id}</h4>

                        </li>
                    ))
                }
            </ul>
        </Modal>
    )
}

export default ShopModal