
import { Canvas } from '@react-three/fiber'
import {MapControls} from '@react-three/drei'
import {MOUSE} from 'three'
import Scene from '@/components/Scene'

const Stage = () => {
    return (
        <Canvas 
        camera={{
            position:[-106,81,-68],
            rotation:[-2.27,-0.78, -2.44],
            zoom:30,
            near: 0,
            far: 500,

        }}
        orthographic={true}>
           <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Scene></Scene>
            <MapControls
            mouseButtons={{
                LEFT: MOUSE.LEFT,
            }}
            enableZoom={true}
            minPolarAngle={1}
            maxPolarAngle={1}
            />
        </Canvas>
    );
};

export default Stage;