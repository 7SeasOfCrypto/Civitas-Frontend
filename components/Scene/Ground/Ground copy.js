import { useRef, useMemo, useEffect, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import {useFrame} from '@react-three/fiber'
import { useStore } from '@/store/Store'
import * as THREE from "three"
import CreateBuilding from '../CreateBuilding'

extend(Nodes)




const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = [0xA0A0A0, 0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]
const Ground = ({ capture = false, setHover }) => {
    const [cellHover, setCellHover] = useState({ x: 0, z: 0 })
    const { map } = useStore()
    
    useFrame(() => {
        let i = 0
        for (let j = 0; j < GRID_COL; j++) {
            for (let k = 0; k < GRID_ROW; k++) {
                const id = j * GRID_COL + k
                tempObject.position.set(CELL_SIZE / 2 + j * CELL_SIZE, 0, CELL_SIZE / 2 + k * CELL_SIZE)
                tempColor.set(colors[map[j][k]]).toArray(colorArray, id * 3)
                tempObject.updateMatrix()
                meshRef.current.setMatrixAt(id, tempObject.matrix)
                
            }
        }

        meshRef.current.instanceMatrix.needsUpdate = true

    }, [colorArray,map])

    const cellHoverHandler = (e) => {
        const cellid = e.instanceId
        const z = cellid % GRID_COL
        const x = Math.floor((cellid - z) / GRID_COL)
        setCellHover({ x: x, z: z })
    }

    const meshRef = useRef(undefined)
    const colorArray = useMemo(() => Float32Array.from(new Array(2500).fill().flatMap((_, i) => tempColor.set(0x00ff00).toArray())), [])
    return (
        <>
            <CreateBuilding cellHover={cellHover} />
            <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={cellHoverHandler}>
                <boxGeometry args={[CELL_SIZE, .5, CELL_SIZE]}>
                    <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
                </boxGeometry>
                <meshPhongMaterial vertexColors={THREE.VertexColors} map/>
            </instancedMesh>

        </>
    )
}


function createInstance(material, array, matId) {

    return (

        <mesh>
            <boxGeometry args={[CELL_SIZE, .5, CELL_SIZE]}>
             
            </boxGeometry>
            <meshPhongMaterial vertexColors={THREE.VertexColors} color='red' />
        </mesh>

    )



}


export default Ground

/* ********************************

        <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={cellHoverHandler}>
            <boxGeometry args={[CELL_SIZE, .5, CELL_SIZE]}>
                <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
            </boxGeometry>
            <meshPhongMaterial vertexColors={THREE.VertexColors} />
        </instancedMesh>
        */