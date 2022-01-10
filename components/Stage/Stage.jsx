import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Preloader from '../Preloader'
import { useProgress } from '@react-three/drei'
import Scene from '@/components/Scene'
const Stage = () => {
    
    const {progress}=useProgress()
    
    return (
        <Canvas
            camera={{
                position: [-106, 81, -68],
                rotation: [-2.27, -0.78, -2.44],
                zoom: 20,
                near: 0,
                far: 500,

            }}
            orthographic={true}>
            <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <Suspense fallback={null}>
                <Preloader percent={progress}></Preloader>
            </Suspense>:
            <Suspense fallback={null}>

            <Scene></Scene>
        </Suspense>
            
        </Canvas>
    )
}

export default Stage
/*
<GizmoViewport
axisColors={[
  color('colorX', 'red', 'ViewPort'),
  color('colorY', 'green', 'ViewPort'),
  color('colorZ', 'blue', 'ViewPort'),
]}
labelColor={color('labelColor', 'black', 'ViewPort')}
hideNegativeAxes={boolean('hideNegativeAxes', false, 'ViewPort')}
/>*/