import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Preloader from '../Preloader'
import { Environment, useProgress } from '@react-three/drei'
import Scene from '@/components/Scene'
const Stage = ({pre}) => {

    const {progress} = useProgress()

    return (
        <Canvas style={{cursor:"none"}}
            camera={{
                position: [-106, 81, -68],
                rotation: [-2.27, -0.78, -2.44],
                zoom: 20,
                near: 0,
                far: 500,

            }}
            
            orthographic={1}>

              {
                <ambientLight intensity={0.25}
                />
                
              } 
            <directionalLight
                color={0xffffff}  
                instensity={3}
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <Suspense fallback={null}>
                <Preloader color='blue' percent={progress}></Preloader>
            </Suspense>:
            <Suspense fallback={null}>
                <Scene></Scene>
                <Environment preset="warehouse" background={true}/>
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

<Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5} />
/>*/