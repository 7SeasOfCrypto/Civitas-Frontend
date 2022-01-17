/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { BuildingMat } from './Building.mat'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/Banners/SBannerD.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <skinnedMesh
        geometry={nodes.SK_Banner_D.geometry}
        castShadow transparent
        receiveShadow
        skeleton={nodes.SK_Banner_D.skeleton}>
        <BuildingMat></BuildingMat>
        <primitive object={nodes.Bone_Pole} />
      </skinnedMesh>
    </group>
  )
}

useGLTF.preload('/Models/Banners/SKBannerD.glb')