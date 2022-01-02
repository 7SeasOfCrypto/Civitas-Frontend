
import { Canvas } from '@react-three/fiber'
import Scene from '@/components/Scene'
const Stage = () => {
    return (
        <Canvas 
        camera={{
            position:[-106,81,-68],
            rotation:[-2.27,-0.78, -2.44],
            zoom:10,
            near: 0,
            far: 300,
        }}
        orthographic={true}>
           <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Scene></Scene>
        </Canvas>
    );
};

export default Stage;