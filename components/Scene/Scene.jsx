
import { Suspense } from 'react'
import Controller from './controller'
import Ground from './Ground'
import Buildings from './Buildings'



const Scene = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Buildings></Buildings>
            </Suspense>
            <Ground />
            <Controller></Controller>
        </>

    )
}

export default Scene