import { useRef } from 'react'
import { Billboard, Plane } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

const Progress = ({ timeCreated, buildTime, percent, icon }) => {
    const barRef = useRef(null)
    const hamerRef = useRef(null)
    const texture = useLoader(THREE.TextureLoader, '/images/Hammer.webp')
    
    useFrame((state,delta) => {

        const timeElapsed = (new Date().getTime() - timeCreated) 
        const percent = timeElapsed < buildTime ? (timeElapsed * 100) / buildTime : 101
        hamerRef.current.material.map.center.set(.5,.5)
            hamerRef.current.material.map.rotation = Math.PI/4+Math.sin(state.clock.elapsedTime*3)/2
        if (percent!==101)
        {
            
            
            
        
            
            barRef.current.scale.set(percent / 100, 1, 1)
            barRef.current.position.set(-5 * (100 - percent) / 200, 0, -.1)
        }
    })
    
    return (<>
        <Billboard
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)
            position={[0, 12, 0]}
        >
            <sprite ref={hamerRef} scale={[3, 3, 1]} position={[-.4, 2, 0]}>
                <spriteMaterial map={texture} />
            </sprite>
            
            <Plane args={[5.2, .7]} position={[0, 0, -.11]}>
                <meshBasicMaterial color={0x000000}></meshBasicMaterial>
            </Plane>
            <Plane args={[5, .5]} position={[0, 0, -.1]} >
                <meshBasicMaterial color={0xff0000}></meshBasicMaterial>
            </Plane>
            <Plane ref={barRef} args={[5, .5]} scale={[1, 1, 1]} position={[-5, 0, -.1]} >
                <meshBasicMaterial color={0x00ff00}></meshBasicMaterial>
            </Plane>
        </Billboard>
    </>
    )
}

//<Plane ref={barRef} args={[5, .5]} scale={[percent2/100,1,1]} position={[-5*(100-percent2)/200, 12, -.1]} >
export default Progress
