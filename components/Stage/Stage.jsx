
import { Canvas } from '@react-three/fiber'
import Scene from '@/components/Scene'

const Stage = () => {
    return (
        <Canvas>
           <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Scene></Scene>
        </Canvas>
    );
};

export default Stage;