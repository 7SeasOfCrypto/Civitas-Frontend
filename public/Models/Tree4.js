/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tree4-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-8.51, 0.98, -0.78]} rotation={[1.56, 0.02, 2.45]} scale={[0.27, 0.27, 0.47]}>
        <mesh geometry={nodes.lowpoly_tree_04_Plane004.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.lowpoly_tree_04_Plane004_1.geometry} material={materials['Material.014']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Tree4-transformed.glb')