/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { BuildingMat } from './Building.mat'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Decorations/Tree.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Tree.geometry} castShadow receiveShadow
      >
      <BuildingMat></BuildingMat>
      </mesh>

    </group>
  )
}

useGLTF.preload('/Models/Decorations/Tree.glb')
