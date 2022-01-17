import React from 'react';
import BuildModal from './BuildModal'
import {useStoreUI} from '@/store/StoreUI'
    
const Modal = () => {
    const {isOpen,BuildId}=useStoreUI(state=>state.modal)
    

    return (
        <div>
            {isOpen?
            <BuildModal></BuildModal>:
            null}

        </div>
    );
};

export default Modal;