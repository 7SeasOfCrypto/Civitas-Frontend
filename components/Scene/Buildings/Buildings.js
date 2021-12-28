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
        const modelData= completed? complete:build
        const {model,colored} =modelData
        const Model=model
        const posX= width%2===0? ( x)*CELL_SIZE       :(.5 +x)*CELL_SIZE
        const posZ= height%2===0? ( y)*CELL_SIZE   : (.5 +y)*CELL_SIZE
        return (
            <group key={Id}>
            <mesh  position={[posZ,0,posX]} >
                <boxGeometry args={[.4, 20, .4]} />
                <meshStandardMaterial color='red' transparent opacity={1} />
            </mesh>
            <Model  position={[posZ,0,posX]} key={index} /> 

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
{x:10,y:10,Id:1,id_model:0,level:0,completed:true},
*/
export default Buildings