import React, { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {BuildingMat} from './Building.mat'

export default function Model({colors,...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Buildings/Library.glb')
  return (

    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.SM_Library.geometry} material={materials.M_Buildings_Parent}  castShadow receiveShadow>
        {!props.children?
          <BuildingMat></BuildingMat>
        : props.children
        }
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Buildings/Keep.glb')
