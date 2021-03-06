/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Buildings/TowerB1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Tower_B_1.geometry} material={materials.M_Buildings_Parent} />
    </group>
  )
}

useGLTF.preload('/Models/Buildings/TowerB1.glb')
