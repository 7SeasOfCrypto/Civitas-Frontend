/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/SM_Castle_1-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Castle_1.geometry} material={materials.M_Buildings_Parent} />
    </group>
  )
}

useGLTF.preload('/SM_Castle_1-transformed.glb')
