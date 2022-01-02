
import { Suspense } from 'react'
import Controller from './controller'
import Ground from './Ground'
import Buildings from './Buildings'
import Level from '@/models/level'



const Scene = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Buildings></Buildings>
            </Suspense>
            <Suspense fallback={null}>
                <Ground />
                
                <Level></Level>
                </Suspense>
                
            <Controller></Controller>
        </>

    )
}

export default Scene