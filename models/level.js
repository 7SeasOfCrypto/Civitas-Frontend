import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as Three from 'three'

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
//material={materials.BasicAsset03}


      