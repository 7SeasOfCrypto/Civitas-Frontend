import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { BuildingMat } from './Building.mat'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Buildings/Keep.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Keep.geometry}
      castShadow transparent receiveShadow
      >
      <BuildingMat></BuildingMat>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Models/Buildings/Keep.glb')
