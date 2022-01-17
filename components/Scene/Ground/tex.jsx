
import { useRef, useMemo, useEffect, useState,Suspense } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import {useLoader} from '@react-three/fiber'
import * as THREE from "three"
import CreateBuilding from '../CreateBuilding'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

const Ground = ({ capture = false, setHover }) => {
    const [cellHover, setCellHover] = useState({ x: 0, z: 0 })
    
    const [floor1,floor2] = useLoader(THREE.TextureLoader, ['/Textures/floor.webp','/Textures/floor2.webp'])
    const mats=[
        new THREE.MeshPhysicalMaterial( {color:0xfff000 }),
        new THREE.MeshStandardMaterial( { map: floor2} ),
        new THREE.MeshStandardMaterial( { map: floor1 } ),
        new THREE.MeshStandardMaterial( { map: floor2} ),
        new THREE.MeshStandardMaterial( { map: floor1 } ),
        new THREE.MeshStandardMaterial( { map: floor2} ),
    ]
    useEffect(() => {
        let uvs = [];
        var textures = [];
        
         





        
        let i = 0
        for (let j = 0; j < GRID_COL; j++) {
            for (let k = 0; k < GRID_ROW; k++) {
         
            
         
            
                const id = j * GRID_COL + k
                tempObject.position.set(CELL_SIZE / 2 + j * CELL_SIZE, 0, CELL_SIZE / 2 + k * CELL_SIZE)
                tempObject.rotation.set(-Math.PI/2, 0,0)
                tempColor.set((j + k) % 2 === 0 ? 0xff0000: 0x00ff00).toArray(colorArray, id * 3)
                tempObject.updateMatrix()
                
                meshRef.current.setMatrixAt(id, tempObject.matrix)
                
            }
            //textures.push(Math.random()<0.3 ? 0 : (Math.random()<0.5 ? 1 : 2));
            //meshRef.current.geometry.setAttribute( 'textureIndex',  new THREE.InstancedBufferAttribute( new Float32Array(textures), 1 ) );

            //meshRef.current.geometry.setAttribute( 'uv', new THREE.InstancedBufferAttribute( new Float32Array( uvs ), 2) );
            //let uvAttribute = meshRef.current.geometry.attributes.uv;
            
        }
        
        meshRef.current.instanceMatrix.needsUpdate = true

    }, [colorArray,floor1,floor2])

    const cellHoverHandler = (e) => {
        const cellid = e.instanceId
        const z = cellid % GRID_COL
        const x = Math.floor((cellid - z) / GRID_COL)
        setCellHover({ x: x, z: z })
    }

    const meshRef = useRef(undefined)
    const colorArray = useMemo(() => Float32Array.from(new Array(2500).fill().flatMap((_, i) => tempColor.set(0xffffff).toArray())), [])
    
    
    return (
        <>
        
            <CreateBuilding cellHover={cellHover} />
            <instancedMesh ref={meshRef} args={[null, null, 2500]} onPointerMove={cellHoverHandler} >
                <planeGeometry args={[CELL_SIZE,  CELL_SIZE]}  attach={"material"} material={mats[0]}>
                    <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
                </planeGeometry>
                {/*<meshBasicMaterial  attack="material" vertexColors={THREE.VertexColors} map={floor2}  />*/}
                
            </instancedMesh>
        
        </>
    )
}

export default Ground

