import { models } from 'models'
import {useStore} from 'store'
import {CELL_SIZE} from 'constants'

const Buildings = () => {
    const { listBuild } = useStore()
    const ArrayBuild= listBuild.map((value,index)=> {
        const {x,y,Id,id_model,level,completed}=value
        const {id,maxlevel,complete,build}=models[id_model]
        const modelData= completed? complete[level]:build[level]
        const {size,model,colored} =modelData
        const Model=model
        return (<Model  position={[(x+size/2)*CELL_SIZE,0,(y+size/2)*CELL_SIZE]} key={index} />)
    })
    return(ArrayBuild)

}

export default Buildings