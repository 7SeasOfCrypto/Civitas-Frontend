import { useRef, useMemo, useEffect, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useStore } from '@/store/Store'
import * as THREE from "three"
import CreateBuilding from '../CreateBuilding'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = [0xA0A0A0, 0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]
const Ground = ({ capture = false, setHover }) => {
    const [cellHover, setCellHover] = useState({ x: 0, z: 0 })
    const { map } = useStore()
    

    useEffect(() => {
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
                <meshPhongMaterial vertexColors={THREE.VertexColors} />
            </instancedMesh>

        </>
    )
}


function createInstance(material, array, matId) {

    return (

        <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={cellHoverHandler}>
            <boxGeometry args={[CELL_SIZE, .5, CELL_SIZE]}>
                <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
            </boxGeometry>
            <meshPhongMaterial vertexColors={THREE.VertexColors} />
        </instancedMesh>

    )



}


export default Ground


/*

            <Merged
                meshes={[
                    new THREE.Mesh(
                        new THREE.BoxGeometry(CELL_SIZE, .5, CELL_SIZE),
                        new THREE.MeshBasicMaterial({color:'0xff0000'})
                    ),
                    
                ]}
            >
                {(Box, Sphere) => {
                
                        return ( InstancedBox(Box))
                    
            
                }
            }
            </Merged>


            */
/*
<mesh ref={planeRef} position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>

<planeBufferGeometry args={[CELL_SIZE * 50, CELL_SIZE * 50]} />
<meshBasicMaterial color="green" />

</mesh>
*/
/*
const InstancedBox=(Mesh)=>{
    console.log(GRID_COL,GRID_ROW)
    return new Array(GRID_ROW).fill().map((value,row)=> new Array(GRID_COL).fill().map((value,col)=>{
        

        return <Mesh  key={row*GRID_COL+ col} position={[row*CELL_SIZE, -.25,col*CELL_SIZE]} />

    }
    ))
 
    return new Array(GRID_COL*GRID_ROW).fill().map((value,index)=>{
             const cubeRow= (index%GRID_ROW)
        const cubeCol= Math.floor(((index-cubeRow)/GRID_ROW))
        console.log(cubeRow, cubeCol)

        return <Mesh  key={index} position={[cubeCol*CELL_SIZE*2, -.25,cubeRow*CELL_SIZE]} />
   
    })
}
*/