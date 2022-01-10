import { models } from 'models'
import { useStore } from 'store'
import Progress from './Progress'
import { CELL_SIZE } from 'constants'
import { useGesture } from '@use-gesture/react'

const Buildings = () => {
    const { placeBuilding } = useStore()
    
/*
    const ArrayBuild = listBuild.map((value, index) => {
        const { x, y, Id, id_model, level, completed,timeCreated } = value
        const { id, maxlevel, complete, build, size,buildTime } = models[id_model]
        const { width, height } = size
        const model = completed === 2 ? complete.model : build.model[completed]
        const Model = model
        const posX = width % 2 === 0 ? (x) * CELL_SIZE : (.5 + x) * CELL_SIZE
        const posZ = height % 2 === 0 ? (y) * CELL_SIZE : (.5 + y) * CELL_SIZE
        
        
        return (
            
            <group key={index} position={[posZ, 0, posX]}>
                {completed!==2?
                    <Progress timeCreated={timeCreated} buildTime={buildTime[level]*1000}></Progress>
                    : null
                }
                <Model position={[0, .44, 0]} key={index} />
                
            </group>
            
            )
            
    })
    return (ArrayBuild)*/
    return null

}
export default Buildings