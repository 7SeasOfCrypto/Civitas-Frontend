/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/SM_Wall_A_door_B-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Wall_A_door_B.geometry} material={materials.M_Buildings_Parent} />
    </group>
  )
}

useGLTF.preload('/SM_Wall_A_door_B-transformed.glb')