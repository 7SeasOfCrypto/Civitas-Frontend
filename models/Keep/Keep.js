import React, { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {BuildingMat} from '../Building.mat'

export default function Model({colors,...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Buildings/Keep.glb')
  return (

    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.SM_Keep.geometry} castShadow receiveShadow>
        {!props.children?
          <BuildingMat attack={'material'}></BuildingMat>
        : props.children
        }
      </mesh>
    </group>
  )
}


useGLTF.preload('/models/Buildings/Keep.glb')


