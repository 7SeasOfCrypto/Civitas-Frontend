import { MapControls } from "@react-three/drei";
import {MOUSE} from 'three'
const Controller = () => {
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