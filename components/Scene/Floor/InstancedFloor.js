import { useRef, useMemo, useEffect, useState,useLayoutEffect } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'


const tempObject = new THREE.Object3D()

const InstancedFloor = ({ Material, matMap, index }) => {

    const [difuse] = useLoader(THREE.TextureLoader, ['/Textures/grass.webp'])
    difuse.wrapS = difuse.wrapT = THREE.RepeatWrapping
    difuse.repeat.set(.5, .5)
    const meshRef = useRef(undefined)
    useLayoutEffect (() => {
        let i = 0
        for (let j = 0; j < matMap.length; j++) {
            tempObject.position.set(CELL_SIZE / 2 + matMap[j].x * CELL_SIZE, 0, CELL_SIZE / 2 + matMap[j].z * CELL_SIZE)
            tempObject.updateMatrix()
            meshRef.current.setMatrixAt(j, tempObject.matrix)
        }
        meshRef.current.instanceMatrix.needsUpdate = true
    }, [matMap])
    return (
        <>
            <group>
                <instancedMesh ref={meshRef} args={[null, null, matMap.length]} receiveShadow>
                    <boxGeometry args={[CELL_SIZE, 1, CELL_SIZE]}>
                    </boxGeometry>
                    {Material}
                </instancedMesh>
            </group>
        </>
    )
}

export default InstancedFloor
