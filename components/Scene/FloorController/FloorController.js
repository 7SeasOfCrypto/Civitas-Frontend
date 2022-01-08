import { useRef, useMemo, useEffect, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import * as Nodes from "three/examples/jsm/nodes/Nodes.js"
import { useStore } from '@/store/Store'
import CreateBuilding from '../CreateBuilding'


extend(Nodes)

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const tempUV = new THREE.Vector2()
//const colors = [0xA0A0A0, 0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]
const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff]

const FloorController = () => {
    const {isAdding,isPlaced}= useStore(state => state.placeBuilding)
    const [cellHover, setCellHover] = useState({ x: 0, z: 0 })
    const { map } = useStore()
    useEffect(() => {
        let i = 0
        for (let j = 0; j < GRID_COL; j++) {
            for (let k = 0; k < GRID_ROW; k++) {
                const id = j * GRID_COL + k
                tempObject.position.set(CELL_SIZE / 2 + j * CELL_SIZE, 0, CELL_SIZE / 2 + k * CELL_SIZE)
                tempObject.rotation.set(-Math.PI/2,0,0)
                tempObject.updateMatrix()
                meshRef.current.setMatrixAt(id, tempObject.matrix)

            }
        }

        meshRef.current.instanceMatrix.needsUpdate = true

    }, [ map])

    const cellHoverHandler = (e) => {
        const cellid = e.instanceId
        const z = cellid % GRID_COL
        const x = Math.floor((cellid - z) / GRID_COL)

        if(cellHover.x!==x||cellHover.z!==z)
        {
            setCellHover({ x: x, z: z })
        }
    }

    const meshRef = useRef(undefined)
    //geometry.setAttribute( 'offset', new THREE.BufferAttribute( offsets, 2 ) );
    return (
        <>
        <group renderOrder={1}>
            {isAdding?
                <CreateBuilding cellHover={cellHover} />
                :null
            }
            <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={!isPlaced?cellHoverHandler:null} visible={false} >
                <planeGeometry args={[CELL_SIZE,  CELL_SIZE]}>
                </planeGeometry>
                <meshPhongMaterial vertexColors={THREE.VertexColors}  />
            </instancedMesh>
            <gridHelper
                    position={[CELL_SIZE * 25, .3, CELL_SIZE * 25]}
                    args={[CELL_SIZE * 50, 50, `white`, `gray`]}
                    scale={1}
                    divisions={50}
                />
            </group>
        </>
    )
}

export default FloorController
