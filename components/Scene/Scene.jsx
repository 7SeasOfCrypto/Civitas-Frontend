
import { Suspense } from 'react'
import Controller from './Controller'
import Ground from './Ground'
import Buildings from './Buildings'
import Level from '@/models/level'
import FloorController from './FloorController'
import {Sky} from '@react-three/drei'

const Scene = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Buildings></Buildings>
            </Suspense>
            <Suspense fallback={null}>
                <FloorController/>
                <Ground></Ground>
                <Level></Level>
                </Suspense>
                <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5}    />
            <Controller></Controller>
        </>

    )
}

export default Scene