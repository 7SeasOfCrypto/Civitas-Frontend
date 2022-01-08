import { useStore } from '@/store/Store'
import FlowerPot from '@/models/FlowerPot'
import {Merged}from '@react-three/drei'
import { CELL_SIZE } from 'constants'
const FlowerPotDecor = () => {
    const {mapMaterial}=useStore(state=>state.maps)
    
    const flowerMesh= mapMaterial[5].map((value,index)=>
        
            <group key={index} >
            <FlowerPot position={[(value.x+.5)*CELL_SIZE, 2,(value.z+.5)*CELL_SIZE]} scale={3} key={index}/>
        </group>
        

    )
    const flower=FlowerPot
//mapMaterial[5].map((value,index)=> )
    return (
        <Merged meshes={[flower]}>
            {
                (Flower ) => (
                    <>
                        <Flower position={[(5.5)*CELL_SIZE, 2,(10.5)*CELL_SIZE]} scale={3} />
                        <Flower position={[(10.5)*CELL_SIZE, 2,(14.5)*CELL_SIZE]} scale={3}/>
                    </>
                )
    
            }
        </Merged>
        )
    
};

export default FlowerPotDecor;

