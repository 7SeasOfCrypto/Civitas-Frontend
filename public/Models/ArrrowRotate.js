/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ArrrowRotate-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.ArrowRotate.geometry} material={materials['SVGMat.006']} />
    </group>
  )
}

useGLTF.preload('/ArrrowRotate-transformed.glb')
