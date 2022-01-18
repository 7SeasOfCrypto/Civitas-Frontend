/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { extend, useFrame, useLoader } from "@react-three/fiber"

export default function Model({ ...props }) {
  const group = useRef()
  const hweapons = useLoader(THREE.TextureLoader, '/Textures/TUnitsBlue.webp')
  const { nodes, materials } = useGLTF('/models/HWeapons/CatapultLl2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <skinnedMesh
        geometry={nodes.SK_Catapult_lvl2.geometry}
        skeleton={nodes.SK_Catapult_lvl2.skeleton}
        castShadow receiveShadow transparent>
        <meshStandardMaterial map={hweapons}></meshStandardMaterial>
        <primitive object={nodes.BONE_BASE} />
      </skinnedMesh>
    </group>
  )
}

useGLTF.preload('/models/HWeapons/CatapultLl2.glb')
