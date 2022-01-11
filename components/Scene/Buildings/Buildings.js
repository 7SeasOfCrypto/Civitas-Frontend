import { modelsBuild } from 'models'
import { useStore } from 'store'
import Progress from './Progress'
import { CELL_SIZE } from 'constants'
import { useGesture } from '@use-gesture/react'

const Buildings = () => {
    const placedBuildings  = useStore(state=>state.placedBuildings)



    const ArrayBuild = placedBuildings.map((property, index) => {
        const { x, y, BuildId, type, level, completed,timeCreated,rotation,geoCenter,size } = property
        const typeData=modelsBuild.find((modelItem)=>modelItem.type===type )
        const {  maxlevel, models, buildTime } = typeData
        const { width, height } = size
        const Model=models[2]
        return (<Model position={[geoCenter.x,.3,geoCenter.z]} rotation={[0, Math.PI / 2 * rotation, 0]} key={BuildId}></Model>)
        
    })

    
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
            
    })*/
    return (ArrayBuild)
    

}
export default Buildings