import React, {useMemo } from 'react'
import {useLoader} from "@react-three/fiber"
import * as THREE from 'three'

const Material = ({colors}) => {

    const flower = useLoader(THREE.TextureLoader, '/Textures/phflower.webp')
    
    return (
        <meshStandardMaterial
        map={flower}
        >
        </meshStandardMaterial>
    )
}

export  const FlowerMat =  Material;