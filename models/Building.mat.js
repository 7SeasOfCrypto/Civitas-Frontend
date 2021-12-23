import React, {useMemo } from 'react'
import {useLoader} from "@react-three/fiber"
import * as THREE from 'three'
import * as Nodes from "three/examples/jsm/nodes/Nodes.js"


const Material = () => {

    const [difuse, mixchannels] = useLoader(THREE.TextureLoader, ['/Textures/BuildingTexture.webp', '/Textures/Texture_b_mix.webp','/Textures/Flag.webp', '/Textures/Logo1.webp'])

    const boxHeight = 2
    const color1 = new THREE.Color(0xffffff)
    color1.setHex(Math.random() * 0xffffff)
    const color2 = new THREE.Color(0xffffff)
    color2.setHex(Math.random() * 0xffffff)
    const color3 = new THREE.Color(0xffffff)
    color3.setHex(Math.random() * 0xffffff)

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
        <standardNodeMaterial side={THREE.DoubleSide}>
            <mathNode attach={"color"} method={Nodes.MathNode.MIX} >
                <textureNode attach={"a"} value={difuse} />
                <mathNode attach={"b"} method={Nodes.MathNode.MIX} >
                    <colorNode attach={"b"} value={color1} />
                    
                    <mathNode attach={"a"} method={Nodes.MathNode.MIX} >
                        <mathNode>
                            <colorNode attach={"a"} value={color2} />
                            <colorNode attach={"b"} value={color3} />
                            <mathNode attach={"c"} method={Nodes.MathNode.DOT}    >
                                <textureNode attach={"a"} value={mixchannels} />
                                <vector4Node attach={"b"} value={[0, 0, 1, 0]} />
                            </mathNode>
                        </mathNode>
                    </mathNode>
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
        </standardNodeMaterial>

    )
}

export  const BuildingMat =  Material;