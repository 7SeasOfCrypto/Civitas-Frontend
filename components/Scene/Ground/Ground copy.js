import { useRef, useMemo, useEffect, useState,Suspense } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import {useLoader} from '@react-three/fiber'
import * as THREE from "three"
import CreateBuilding from '../CreateBuilding'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

const Ground = ({ capture = false, setHover }) => {
    const [cellHover, setCellHover] = useState({ x: 0, z: 0 })
    
    const [floor] = useLoader(THREE.TextureLoader, ['/Textures/floor.webp'])
    useEffect(() => {
        
        let i = 0
        for (let j = 0; j < GRID_COL; j++) {
            for (let k = 0; k < GRID_ROW; k++) {
                //console.log(j, k)
                const id = j * GRID_COL + k
                tempObject.position.set(CELL_SIZE / 2 + j * CELL_SIZE, 0, CELL_SIZE / 2 + k * CELL_SIZE)
                tempColor.set((j + k) % 2 === 0 ? 0x00ff00 : 0xff0000).toArray(colorArray, id * 3)
                tempObject.updateMatrix()
                meshRef.current.setMatrixAt(id, tempObject.matrix)
                
            }
        }
        
        meshRef.current.instanceMatrix.needsUpdate = true

    }, [colorArray])

    const cellHoverHandler = (e) => {
        const cellid = e.instanceId
        const z = cellid % GRID_COL
        const x = Math.floor((cellid - z) / GRID_COL)
        setCellHover({ x: x, z: z })
    }

    const meshRef = useRef(undefined)
    const colorArray = useMemo(() => Float32Array.from(new Array(2500).fill().flatMap((_, i) => tempColor.set(0x00ff00).toArray())), [])
    //const offsetArray = useMemo(() => Float32Array.from(new Array(2500).fill().flatMap((_, i) => tempColor.set(0x00ff00).toArray())), [])

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

export default Ground

/* =================================
var uvOffsets = [];
var u, v;
for ( var i = 0; i < instances; i ++ ) {
    //... inside the loop
    u = Math.random(); // I'm assigning random, but you can do the math...
    v = Math.random(); // ... to make it discrete 1/8th amounts
    uvOffsets.push(u, v);
}

// Add new attribute to BufferGeometry
var uvOffsetAttribute = new THREE.InstancedBufferAttribute( new Float32Array( uvOffsets ), 2 );
geometry.addAttribute( 'uvOffset', uvOffsetAttribute );

*/

//vertex_shader

/* =================================
// [...]
attribute vec2 uv;
attribute vec2 uvOffset;
varying vec2 vUv;

void main() {
    vec3 vPosition = applyQuaternionToVector( orientation, position );

    // Divide uvs by 8, and add assigned offsets
    vUv = (uv / 8.0) + uvOffset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( offset + vPosition, 1.0 );
}
*/

//fragment_shader
/* =================================

Finally, in your frag shader:

precision highp float;
uniform sampler2D map;
uniform vec2 uvOffset;
varying vec2 vUv; // <- these UVs have been transformed by vertex shader.

void main() {
    gl_FragColor = texture2D( map, vUv ); // <- Transformation is applied to texture
}
*/