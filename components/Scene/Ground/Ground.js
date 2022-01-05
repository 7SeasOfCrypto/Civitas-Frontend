import { useState, useEffect } from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'
import InstancedFloor from './InstancedFloor'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'




const colors = [0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]


const Ground = ({ capture = false, setHover }) => {

  const { map, mapMaterial } = useStore(state => state.maps)
  const maps = useStore(state => state.maps)
  const textures = useLoader(THREE.TextureLoader, ['/Textures/grass.webp', '/Textures/swalk.webp', '/Textures/road.webp', '/Textures/grass.webp', '/Textures/ph.webp', '/Textures/decor.webp', '/Textures/grass.webp'])

  for (let x = 0; x < textures.length; x++) {
    textures[x].wrapS = textures[x].wrapT = THREE.RepeatWrapping
    if (x === 0) {
      textures[x].repeat.set(20, 20)
    }

  }

  const materials = colors.map((value, index) => new THREE.MeshPhysicalMaterial({ map: textures[index] }) )
  const GroundTile = mapMaterial.map((value, index) => index !== 0 ? <InstancedFloor key={index} matMap={value} material={materials[index]} index={index} /> : null)
  return (
    <>
      <group renderOrder={1}>
        <mesh position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]} material={materials[0]}>

          <boxGeometry args={[CELL_SIZE * 50+.1, .5, CELL_SIZE * 50+.1]}>
          </boxGeometry>


        </mesh>
        {textures.length !== 0 ? GroundTile : null}

      </group>
    </>
  )
}

export default Ground
