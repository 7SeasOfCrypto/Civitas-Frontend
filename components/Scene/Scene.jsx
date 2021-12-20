
import { Suspense } from 'react'
import Controller from './controller'
import SMCastle from '@/models/SMCastle'
import Ground from './Ground'
import Buildings from './Buildings'
import CreateBuilding from './CreateBuilding'
import { CELL_SIZE } from 'constants'

const Scene = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Buildings></Buildings>ººººº
            </Suspense>
            <Ground />
            <CreateBuilding />
            <Controller></Controller>
        </>

    )
}

export default Scene