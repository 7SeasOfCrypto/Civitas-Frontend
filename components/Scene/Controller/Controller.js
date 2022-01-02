import { MapControls,OrbitControls } from "@react-three/drei";
import {MOUSE} from 'three'
import { useThree } from "@react-three/fiber";
const Controller = () => {
    
    const {camera} = useThree();
    
    return (
    <OrbitControls></OrbitControls>
    );
};

export default Controller;

/*
    <MapControls
        mouseButtons={{
            LEFT: MOUSE.LEFT,
            RIGHT:MOUSE.RIGHT,
        }}
        enableZoom={true}
        minPolarAngle={1}
        maxPolarAngle={1}
        />
        */