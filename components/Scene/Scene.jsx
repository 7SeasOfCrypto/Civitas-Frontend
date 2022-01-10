
import { Suspense } from 'react'
import Controller from './Controller'
import Ground from './Ground'
import Floor from './Floor'
import Buildings from './Buildings'

import FloorController from './FloorController'
import { Sky } from '@react-three/drei'

import Stronghold from './Stronghold'

const Scene = () => {
    
    return (
        <>

            <Suspense fallback={null}>
                <Ground></Ground>
                <Floor></Floor>
            </Suspense>

            <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5} />
            <Controller></Controller>
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