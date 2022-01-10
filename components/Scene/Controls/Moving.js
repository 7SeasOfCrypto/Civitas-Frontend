import MoveControls from './MoveControls'
import FloorController from './FloorController'
        
import {useStore} from '@/store/Store'

const Moving = () => {
    const {isActive}=useStore(state=>state.moveMode)
    console.log('is moving',isActive)
    if(isActive)
    return (
        <>
            <FloorController></FloorController>
            <MoveControls></MoveControls>        
        </>
    );
    return null
};

export default Moving;