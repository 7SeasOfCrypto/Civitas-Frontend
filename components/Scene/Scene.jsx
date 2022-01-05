
import { Suspense } from 'react'
import Controller from './Controller'
import Ground from './Ground'
import Buildings from './Buildings'
import Level from '@/models/level'
import FloorController from './FloorController'
import {Sky} from '@react-three/drei'
import {useStore} from '@/store/Store'
import Stronghold from './Stronghold'

const Scene = () => {
    const {isAdding}= useStore(state => state.placeBuilding)
    return (
        <>
        
            <Suspense fallback={null}>
                <Buildings></Buildings>
            </Suspense>
            <Suspense fallback={null}>
                {isAdding?
                    <FloorController/>:null
                }
                <Ground></Ground>
                <Level></Level>
                <Stronghold></Stronghold>
                
                </Suspense>
                <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5}    />
            <Controller></Controller>
        </>

    )
}

export default Scene