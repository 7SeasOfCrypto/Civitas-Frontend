
import { Canvas } from '@react-three/fiber'
import Scene from '@/components/Scene'
import { GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'

const Stage = () => {
    return (
        <Canvas
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
            
             
              
            <Scene></Scene>
             {/*
            <GizmoHelper
                alignment='bottom-middle'
                margin={[800,50]}
            >

                <GizmoViewcube
                    faces={['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']}
                    opacity={1}
                    color={ 'white'}
                    strokeColor={ 'gray'}
                    textColor={ 'black'}
                    hoverColor={ 'lightgray'}
                />



            </GizmoHelper>
             */} 
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