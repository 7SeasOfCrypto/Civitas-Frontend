/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/SKBannerD.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <skinnedMesh
        geometry={nodes.SK_Banner_D.geometry}
        material={materials.M_Banners_Parent}
        skeleton={nodes.SK_Banner_D.skeleton}>
        <primitive object={nodes.Bone_Pole} />
      </skinnedMesh>
    </group>
  )
}

useGLTF.preload('/SKBannerD.glb')