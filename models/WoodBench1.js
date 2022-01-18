import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ grass=0x25ff25,log= 0x60200F,rock= 0x8f8f8a,...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/WoodBench1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.02, 0]} rotation={[0, -0.73, 0]} scale={[2, 1.4, 2]}>

        <mesh geometry={nodes.Cube005.geometry}>
          <meshStandardMaterial color={grass}/>
        </mesh>

        <mesh geometry={nodes.Cube005_1.geometry}>
          <meshStandardMaterial color={log}/>
        </mesh>

        <mesh geometry={nodes.Cube005_2.geometry}>
          <meshStandardMaterial color={rock}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Woodbench1.glb')