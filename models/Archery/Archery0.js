/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {BuildingMat} from '../Building.mat'


function randomColor() {
  var color = "#"
  var randomHex = "123456ABCDEF"
  for (let i = 0; i < 6; i++) {
    color += randomHex[Math.floor(Math.random() * 16)]
  }

  return color
}

export default function Model({colors,...props}) {
  const group = useRef()
  const { nodes} = useGLTF('/models/Construction/Archery0.glb')
  return (




    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Archery_0.geometry} castShadow transparent
        receiveShadow >
        <BuildingMat></BuildingMat>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Construction/Archery0.glb')