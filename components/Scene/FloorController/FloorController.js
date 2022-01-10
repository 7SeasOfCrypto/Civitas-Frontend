import { useRef, useMemo, useEffect, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'

import * as THREE from 'three'
import { useStore } from '@/store/Store'



const tempObject = new THREE.Object3D()
const FloorController = () => {
    const {setHoverTile}= useStore(state => state.actions)
    //const {isCapturing,tileX,tileY} =useStore(state => state.hoverTile)
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

    }, [ ])

    const cellHoverHandler = (e) => {
        const cellid = e.instanceId
        const z = cellid % GRID_COL
        const x = Math.floor((cellid - z) / GRID_COL)
          setHoverTile({ tile:{x: x, z: z }})
      }

    const meshRef = useRef(undefined)
    return (
        <>
        <group renderOrder={1}>
         
            <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={cellHoverHandler} visible={false} >
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
