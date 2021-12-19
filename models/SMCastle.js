/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import * as Nodes from "three/examples/jsm/nodes/Nodes.js"
import { MeshStandardNodeMaterial } from 'three-stdlib'




extend(Nodes)
function randomColor() {
  var color = "#"
  var randomHex = "123456ABCDEF"
  for (var i = 0; i < 6; i++) {
    color += randomHex[Math.floor(Math.random() * 16)]
  }

  return color
}

export default function Model(props) {
  const [difuse, mixchannels, flag, logo] = useLoader(THREE.TextureLoader, ['/Textures/BuildingTexture.webp', '/Textures/Texture_b_mix.webp', '/Textures/Flag.webp', '/Textures/Logo1.webp'])

  const boxHeight = 2

  var uvTransform = useMemo(
    () =>
      new Nodes.UVTransformNode(
        new Nodes.UVNode(),
        new Nodes.Matrix3Node(
          new THREE.Matrix3().set(1, 0, 0, 0, boxHeight, 0, 0, 0, 0)
        )
      ),
    []
  )
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Castle.glb')
  const color1 = new THREE.Color(0xf00000)
  color1.setHex(Math.random() * 0xffffff)
  const color2 = new THREE.Color(0x00ff00)
  color2.setHex(Math.random() * 0xffffff)
  const color3 = new THREE.Color(0x0000ff)
  color3.setHex(Math.random() * 0xffffff)

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.SM_Castle.geometry}    castShadow
          receiveShadow >
        <standardNodeMaterial side={THREE.DoubleSide} castShadow  opacity={0}>
        <mathNode attach={"color"} method={Nodes.MathNode.MIX} >
            <textureNode attach={"b"} value={logo} />
            <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
              <textureNode attach={"a"} value={difuse} />
              <mathNode attach={"b"} method={Nodes.MathNode.MIX} >
                <colorNode attach={"b"} value={color1} />
                <operatorNode attach={"a"} op={"*"}>
                  <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
                    <colorNode attach={"a"} value={color2} />
                    <colorNode attach={"b"} value={color3} />
                    <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                      <textureNode attach={"a"} value={mixchannels} />
                      <vector4Node attach={"b"} value={[0, 1,0, 0]} />
                    </mathNode>
                  </mathNode>
                  <textureNode attach={"b"} value={flag} />
              </operatorNode>



                <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                  <textureNode attach={"a"} value={mixchannels} />
                  <vector4Node attach={"b"} value={[1,0, 0, 0]} />
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
        
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Castle.glb')
