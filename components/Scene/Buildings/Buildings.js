import { models } from 'models'
import {useStore} from 'store'
import {CELL_SIZE} from 'constants'

const Buildings = () => {
    const { listBuild } = useStore()
    
    const ArrayBuild= listBuild.map((value,index)=> {

        const {x,y,Id,id_model,level,completed}=value
        const {id,maxlevel,complete,build}=models[id_model]
        //console.log(models[id_model])
        
        const modelData= completed? complete[level]:build[level]
        const {size,model,colored} =modelData
        const Model=model
        return (<Model  position={[size*CELL_SIZE/2,0,size*CELL_SIZE/2]}key={index} />)
        return <></>
        //listBuild:[{x:0,y:0,Id:1,id_model:1,level:0,complete:true}],
    })
    
    
    
    
    
    return(ArrayBuild)
        
}

export default Buildings