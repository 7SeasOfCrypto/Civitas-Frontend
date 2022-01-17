import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Progress
} from '@chakra-ui/react'
import { useStoreUI } from '@/store/StoreUI'
import {useStore} from '@/store/Store'
function ModalWindow() {
    
    const {isOpen,BuildId}=useStoreUI(state=>state.modal)
    
    const {closeModal}=useStoreUI(state=>state.actions)
    const collectBuilding=useStore(state=>state.collectBuilding)
    
    
    const selBuild= collectBuilding.find(build=>build.BuildId === BuildId)
    
    const {percentCollect,name,level}= selBuild

    
    return (
        <>


            <Modal isOpen={isOpen} onClose={()=>console.log('close')} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}-{BuildId} </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div style={{backgroundColor:'green',width:'100%'}}>
                    <Progress hasStripe value= {percentCollect} colorScheme={percentCollect<40?'red':'green'}/>
                    </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalWindow