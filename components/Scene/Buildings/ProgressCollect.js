import { useRef } from 'react'
import { Billboard, GradientTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import {useStore} from '@/store/Store'

const ProgressCollect = ({ BuildId}) => {
    const bar1Ref = useRef(null)
    const bar2Ref = useRef(null)
    const hamerRef = useRef(null)
    const collectBuilding=useStore(state=>state.collectBuilding)
    
    const percent= collectBuilding.find(build=>build.BuildId === BuildId).percentCollect
    
    useFrame((state,delta) => {

    
        if (percent!==101)
        {
            
            
            
        
            
            bar1Ref.current.scale.set(percent / 100, 1, 1)
            
            //barRef.current.position.set(-5 * (100 - percent) / 200, 0, -.1)
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
 
            <mesh position={[0,0,-4]}>
                <boxGeometry args={[7.4,.9,.2]}></boxGeometry>
                <meshBasicMaterial color={0x000000}></meshBasicMaterial>
            </mesh>
            <group position={[-3.5,0,0]} scale={[percent/100,1,1]} ref={bar1Ref}>
                <mesh position={[3.5,0,0]}>
                    <boxGeometry args={[7,.6,.2]} position={[0,.2,0]}></boxGeometry>
                    <meshBasicMaterial  color={percent<40?'orange':0x10ff00}>

            </meshBasicMaterial>
                </mesh>
            </group>
           

            
          
        </Billboard>
    </>
    )
}
/*

  
            <Plane args={[5.2, .7]} position={[0, 0, -.11]}>
                <meshBasicMaterial color={0x000000}></meshBasicMaterial>
            </Plane>
            <Plane args={[5, .5]} position={[0, 0, -.1]} >
                <meshBasicMaterial color={0xff0000}></meshBasicMaterial>
            </Plane>
            <Plane ref={barRef} args={[5, .5]} scale={[1, 1, 1]} position={[-5, .1, -.1]} renderOrder={2}>
                <meshBasicMaterial color={0x00ff00}></meshBasicMaterial>
            </Plane>

    */

//<Plane ref={barRef} args={[5, .5]} scale={[percent2/100,1,1]} position={[-5*(100-percent2)/200, 12, -.1]} >
export default ProgressCollect
