import { useState, useEffect } from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'
import InstancedFloor from './InstancedFloor'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'




const colors = [0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]


const Ground = ({ capture = false, setHover }) => {

  const [textures, setTextures] = useState([])

  const { map, mapMaterial } = useStore(state => state.maps)
  const maps = useStore(state => state.maps)


  const [difuse, grass] = useLoader(THREE.TextureLoader, ['/Textures/floorTile.webp', '/Textures/Grass.webp'])
 
  difuse.wrapS = difuse.wrapT = THREE.RepeatWrapping
  difuse.repeat.set(.5, .5)

  useEffect(() => {
      const Textures = colors.map((value, index) => {
        if (index !== 0) {
          const newTexture = difuse.clone()
          
        
          newTexture.repeat.set(1 / 8, 1.2)
          newTexture.offset.set(index / 8, .1)
          newTexture.needsUpdate = true
          return newTexture
        }
        const newTexture = grass
        grass.wrapS = grass.wrapT =THREE.RepeatWrapping
        grass.repeat.set(25,25)
        grass.needsUpdate = true
    })
    
    
    
    setTextures(Textures)

  }, [difuse,grass])

  const materials = colors.map((value, index) =>{ 
    const newMat=new THREE.MeshPhysicalMaterial({ map:index!==0? textures[index]:grass,precision:"highp" })
  
    return newMat
})


  const GroundTile = mapMaterial.map((value, index) => index !== 0 ? <InstancedFloor key={index} matMap={value} material={materials[index]} index={index} /> : null)
  return (
    <>
      <group renderOrder={1}>
        <mesh position={[CELL_SIZE*25,0,CELL_SIZE*25]} material={materials[0]}>

          <boxGeometry args={[CELL_SIZE * 50, .5  , CELL_SIZE * 50]}>
          </boxGeometry>
          

        </mesh>
        {textures.length !== 0 ? GroundTile : null}
        
      </group>
    </>
  )
}

export default Ground
