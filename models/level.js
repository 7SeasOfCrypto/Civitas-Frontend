import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as three from 'three'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/map.glb')
  materials.PipoMaterial.side = three.DoubleSide
  return (
    <group ref={group} {...props} position = {[40,-15,0]} dispose={null}>
    <group rotation = {[0,-Math.PI/4,0]}>
  <mesh geometry={nodes.PipoIsland.geometry} material={materials.PipoMaterial} />
   </group>
    </group>
  )
}

useGLTF.preload('/models/levelmap.glb')



/*
export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Map.glb')
  materials.BasicAsset03.side
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.SM_FloatingIsland_S_2_StaticMeshComponent0.geometry}
        
        position={[102, -3, 110]}
        scale={[1.15, 1.15, 1.15 ]}
      >
      <meshStandardMaterial  color={'green'} side={Three.DoubleSide} />
      </mesh>
      <mesh
      position={[0,-7,0]}
      
      
      
      >
      <boxGeometry args={[1500, .1, 1500]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
    </group>
  )
}

useGLTF.preload('/models/Map.glb')
*/
//material={materials.BasicAsset03}


      