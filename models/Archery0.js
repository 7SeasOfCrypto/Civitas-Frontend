/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {BuildingMat} from './Building.mat'


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

/*

<standardNodeMaterial side={THREE.DoubleSide} castShadow>
          <mathNode attach={"color"} method={Nodes.MathNode.MIX} >
            <textureNode attach={"b"} value={logo} />
            <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
              <textureNode attach={"a"} value={difuse} />
              <mathNode attach={"b"} method={Nodes.MathNode.MIX} >
                <colorNode attach={"b"} value={roof} />
                <operatorNode attach={"a"} op={"*"}>
                  <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
                    <colorNode attach={"a"} value={flag1} />
                    <colorNode attach={"b"} value={flag2} />
                    <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                      <textureNode attach={"a"} value={mixchannels} />
                      <vector4Node attach={"b"} value={[0, 1, 0, 0]} />
                    </mathNode>
                  </mathNode>
                  <textureNode attach={"b"} value={flag} />
                </operatorNode>
                <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                  <textureNode attach={"a"} value={mixchannels} />
                  <vector4Node attach={"b"} value={[1, 0, 0, 0]} />
                </mathNode>
              </mathNode>
              <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                <textureNode attach={"a"} value={mixchannels} />
                <vector4Node attach={"b"} value={[1, 1, 1, 0]} />
              </mathNode>
            </mathNode >
            <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
              <textureNode attach={"a"} value={logo} />
              <vector4Node attach={"b"} value={[0, 0, 0, 1]} />
            </mathNode>
          </mathNode>

        </standardNodeMaterial>
        */




