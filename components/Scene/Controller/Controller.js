import { MapControls } from "@react-three/drei";
import {MOUSE} from 'three'
import { useThree } from "@react-three/fiber";
const Controller = () => {
    console.log(MOUSE)
    const {camera} = useThree();
    console.log(camera)
    return (
        <MapControls
        mouseButtons={{
            LEFT: MOUSE.LEFT,
            RIGHT:MOUSE.RIGHT,
        }}
        enableZoom={true}
        minPolarAngle={1}
        maxPolarAngle={1}
        />
    );
};

export default Controller;