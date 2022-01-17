import React, {useMemo } from 'react'
import {useLoader} from "@react-three/fiber"

import * as THREE from 'three'
import * as Nodes from "three/examples/jsm/nodes/Nodes.js"


const Material = ({colors}) => {
    
    const [difuse, mixchannels, flag, logo, opacity = 1] = useLoader(THREE.TextureLoader, ['/Textures/BuildingTexture.webp', '/Textures/BuildingMix.webp', '/Textures/Flag.webp', '/Textures/Logo1.webp'])
    const boxHeight = 2
    const {roof,flag1,flag2}=colors? colors: {roof:0xff0000,flag1:0x00ff00,flag2:0xff00ff}

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
    return (
        <standardNodeMaterial side={THREE.DoubleSide} castShadow receiveShadow shadowSide={THREE.FrontSide} >
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

    )
}

export  const BuildingMat =  Material;