import React, { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {BuildingMat} from './Building.mat'

export default function Model({colors,...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Construction/House1.glb')
  return (

    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_House_1.geometry} material={materials.M_Buildings_Parent} receiveShadow >
        {!props.children?
          <BuildingMat></BuildingMat>
        : props.children
        }
      </mesh>
    </group>
  )
}


useGLTF.preload('/models/Construction/House1.glb')
