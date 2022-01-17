/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({grass=0x25ff25,tree1=0x60200F,tree2=0xCF922E,rock=0xa0a0a0a0, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/TreeRuined-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube010.geometry}>
<meshStandardMaterial color={grass}/>
      </mesh>
      <mesh geometry={nodes.Cube010_1.geometry}>
<meshStandardMaterial color={tree1}/>
      </mesh>
      <mesh geometry={nodes.Cube010_2.geometry}>
<meshStandardMaterial color={tree2}/>
      </mesh>
      <mesh geometry={nodes.Cube010_3.geometry}>
        <meshStandardMaterial color={rock}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/TreeRuined-transformed.glb')