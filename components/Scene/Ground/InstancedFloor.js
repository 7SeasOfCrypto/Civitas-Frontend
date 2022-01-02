import { useRef, useMemo, useEffect, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'




const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const tempUV = new THREE.Vector2()
const colors = [0xA0A0A0, 0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]
//const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff]

const InstancedFloor = ({material,matMap}) => {
    
    const [difuse] = useLoader(THREE.TextureLoader, ['/Textures/floor.webp'])
    difuse.wrapS = difuse.wrapT = THREE.RepeatWrapping
    difuse.repeat.set(.5, .5)
    const meshRef = useRef(undefined)
    useEffect(() => {
        let i = 0
        for (let j = 0; j <  matMap.length; j++) {
          
                
                tempObject.position.set(CELL_SIZE / 2 + matMap[j].x * CELL_SIZE, 0, CELL_SIZE / 2 + matMap[j].z * CELL_SIZE)
                
                tempObject.updateMatrix()
                meshRef.current.setMatrixAt(j, tempObject.matrix)

          
        }

        meshRef.current.instanceMatrix.needsUpdate = true

    }, [matMap])
        
  

    
    
    return (
        <>
        <group>
            
            <instancedMesh ref={meshRef} args={[null, null, matMap.length]}  material={material}>
                <boxGeometry args={[CELL_SIZE,1, CELL_SIZE]}>
                    
                </boxGeometry>
                
            </instancedMesh>
            </group>
        </>
    )
}

export default InstancedFloor
