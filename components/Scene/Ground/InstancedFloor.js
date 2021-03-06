import { useRef, useMemo, useEffect, useState,useLayoutEffect } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import * as Nodes from "three/examples/jsm/nodes/Nodes.js"

extend(Nodes)



const tempObject = new THREE.Object3D()

const InstancedFloor = ({ Material, matMap, index }) => {


    if (index === 6)
    {
        return (null)
    }

    const meshRef = useRef(undefined)
    useEffect (() => {
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
