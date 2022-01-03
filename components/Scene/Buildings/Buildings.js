import { models } from 'models'
import {useStore} from 'store'
import {useSpring} from '@react-spring/three'
import {CELL_SIZE} from 'constants'
import {useGesture } from '@use-gesture/react'
const Buildings = () => {
    const { listBuild } = useStore()
    
    const ArrayBuild= listBuild.map((value,index)=> {
        const {x,y,Id,id_model,level,completed}=value
        
        const {id,maxlevel,complete,build,size}=models[id_model]
        const {width,height}=size
        const model= completed===2? complete.model:build.model[completed]
        
        const Model=model
        const posX= width%2===0? ( x)*CELL_SIZE       :(.5 +x)*CELL_SIZE
        const posZ= height%2===0? ( y)*CELL_SIZE   : (.5 +y)*CELL_SIZE
        return (
            <group key={index}>

            <Model  position={[posZ,.44,posX]} key={index} /> 

            </group>)
    })
    return(ArrayBuild)

}
/*
id:0,
maxlevel:2,
size:{width:3,height:3},
complete:{model:SMCastle,colored:true},
build:{model:SMCastle, colored:false},
rotation:0,

*/
export default Buildings