/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ color1,color2,...props }) {
  const group = useRef()

  const { nodes, materials } = useGLTF('/models/Tree4.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[1.56, 0.02, 2.45]} scale = {[1,1,1]}>
        <mesh geometry={nodes.lowpoly_tree_04_Plane004.geometry}>
        <meshStandardMaterial color={color1?color1:0x60200F}></meshStandardMaterial>

        </mesh>
        <mesh geometry={nodes.lowpoly_tree_04_Plane004_1.geometry}>
          <meshStandardMaterial color={color2?color2:0x325E09}></meshStandardMaterial>
          
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Tree4.glb')
