import RotateControls from './RotateControls'
import {useStore} from '@/store/Store'

const Rotating = () => {
    const {isActive}=useStore(state=>state.rotateMode)
    
    if(isActive)
    return (
        <>
            <RotateControls></RotateControls>        
        </>
    );
    return null
};

export default Rotating;