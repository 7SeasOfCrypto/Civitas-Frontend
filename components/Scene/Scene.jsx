
import { Suspense } from 'react'
import Controller from './Controller'
import Floor from './Floor'
import Buildings from './Buildings'
import Controls from './Controls'
import { Sky } from '@react-three/drei'

import Stronghold from './Stronghold'

const Scene = () => {
    
    return (
        <>

            <Suspense fallback={null}>
                <Floor></Floor>
            </Suspense>
            <Suspense>
                <Buildings></Buildings>
            </Suspense>
            <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5} />
            <Controller></Controller>
            <Suspense>
            <Controls></Controls>
            </Suspense>
        </>

    )
}

export default Scene

/* =================================================================
            <Suspense fallback={null}>
                {isAdding ?
                    <FloorController /> : null
                }
                
                <Stronghold></Stronghold>
            </Suspense>
            */