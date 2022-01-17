import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Stats, Sky, OrbitControls } from "drei";
import Grass from "./Grass";

export default function App() {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [15, 15, 30] }}
    >
      <Sky />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Grass />
      </Suspense>
      <Stats />
      <OrbitControls />
    </Canvas>
  );
}
