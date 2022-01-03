import Modal from './Modal'
const ShopModal = () => {
    const {myHouses} = useStore(state => state.myHouses)
    return (
        <Modal title="Shop">
            <ul>
                {
                    myBuildings.map((house) => (
                        <li>
                            <h4>{house.id}</h4>

                        </li>
                    ))
                }
            </ul>
        </Modal>
    )
}

export default ShopModal