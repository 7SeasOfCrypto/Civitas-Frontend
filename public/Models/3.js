/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Map-v0.2.3.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.PipoIsland.geometry} material={materials.PipoMaterial} position={[0, 1, -1]} />
    </group>
  )
}

useGLTF.preload('/Map-v0.2.3.glb')
