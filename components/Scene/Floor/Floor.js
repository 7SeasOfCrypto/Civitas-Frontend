import {useEffect} from 'react'
import { useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'
import InstancedFloor from './InstancedFloor'
import { CELL_SIZE } from 'constants'



const colors = [0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]


const Floor = () => {
    const { mapMaterial } = useStore(state => state.maps)
    const textures = useLoader(THREE.TextureLoader, ['/Textures/Grass.webp', '/Textures/swalk.webp', '/Textures/road.webp', '/Textures/grass.webp', '/Textures/ph.webp', '/Textures/decor.webp', '/Textures/grass.webp'])
    
    for (let x = 0; x < textures.length; x++) {
        textures[x].wrapS = textures[x].wrapT = THREE.RepeatWrapping
        if (x === 0) {
            textures[x].repeat.set(20, 20)
            
        }
        }
    
    const materials = colors.map((value, index) => (<meshStandardMaterial map={textures[index]} key={index} />))
    const GroundTile = mapMaterial.map((value, index) => index !== 0 ? <InstancedFloor key={index} matMap={value} Material={materials[index]} index={index} /> : null)

    return (
        <>
            <group renderOrder={1}>
                <mesh position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]}   castShadow   receiveShadow>
                    <boxGeometry args={[CELL_SIZE * 50 + .1, .5, CELL_SIZE * 50 + .1]}>
                    </boxGeometry>
                    {materials[0]}
                </mesh>
                {textures.length !== 0 ? GroundTile : null}
            </group>
        </>
    )
}

export default Floor
