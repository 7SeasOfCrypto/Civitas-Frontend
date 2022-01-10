
import { useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'
import InstancedFloor from './InstancedFloor'
import { CELL_SIZE } from 'constants'
import Moving from '../BluildEditor/Moving'




const Ground = () => {
  const {isCapturing} =useStore(state => state.hoverData)
  const {isPlaced}=useStore(state=>state.addMode)
  
  return (
    <>
  <Moving></Moving>
        
      </>
  )
}

export default Ground
