
import { Suspense } from 'react'
import Controller from './Controller'
import Floor from './Floor'
import Buildings from './Buildings'
import Level from '@/models/level'
import {Sky} from '@react-three/drei'
import Stronghold from './VIPBuildings/Stronghold'
import Market from './VIPBuildings/Market'
import TownCenter from './VIPBuildings/TownCenter'
import Blacksmith from './VIPBuildings/Blacksmith'
import Trees from './VIPBuildings/Trees'
import Controls from './Controls'
import MWater from '@/models/mWater'
import FarIsland from '@/models/farIsland'


const Scene = () => {

    return (
        <>
            <Controller/>
            <Suspense fallback={null}>
                <Floor></Floor>
            </Suspense>
            <Suspense>
                <Buildings></Buildings>
            </Suspense>
            <Suspense fallback={null}>
                <MWater></MWater>
                <FarIsland> </FarIsland>
                <Level></Level>
                <Stronghold></Stronghold>
                <Market></Market>
                <TownCenter></TownCenter>
                <Blacksmith></Blacksmith>
                <Trees></Trees>
                <Controls></Controls>

                
                </Suspense>
                <Sky distance={45000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.5}    />
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