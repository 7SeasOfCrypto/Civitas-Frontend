import {useState,useEffect,useCallback} from 'react'
import { modelsBuild } from 'models'
import { useStore } from 'store'
import Progress from './Progress'
import ProgressCollect from './ProgressCollect'
import {useStoreUI} from '@/store/StoreUI'
import { CELL_SIZE } from 'constants'
import { useGesture } from '@use-gesture/react'

 
const Buildings = () => {
    const placedBuildings  = useStore(state=>state.placedBuildings)
    const {openModal}=useStoreUI(state=>state.actions)
 
    const onClick=(e,BuildId,percent,completed)=>
    {
        if( completed===2)
            openModal(BuildId)

    }
    console.log("***********")
    console.log(placedBuildings)
    const ArrayBuild = placedBuildings.map((property, index) => {
        const { x, y, BuildId, type, level, completed,timeCreated,rotation,geoCenter,size,percent } = property
        const typeData=modelsBuild.find((modelItem)=>modelItem.type===type )
        const {  maxlevel, models, buildTime } = typeData
        
        const Model=models[completed]
        console.log(BuildId)
        return (
        <group position={[geoCenter.x,.3,geoCenter.z]} key={BuildId} >
            <Model  rotation={[0, Math.PI / 2 * rotation, 0]} onPointerDown={(e)=>onClick(e,BuildId,percent,completed)}/>
            {percent!==101?
                <Progress timeCreated={timeCreated} buildTime={buildTime*1000} percent={percent}/>
                :
                <ProgressCollect BuildId={BuildId}></ProgressCollect>

            }
        
        </group>
        )
        
    })

   
    return (ArrayBuild)
    

}
export default Buildings

/*

    const [timer,setTimer]=useState(0)
    const [pressTime,setPressTime]=useState(0)
    
    const mouseHold = useCallback(
        (e,BuildId) => {
          console.log("holded ",e)
        },
        [],
      );

      
    const onClick=(e,BuildId)=>{
            const newTimer= setTimeout(()=>mouseHold(e),1000)
            setTimer(newTimer)
            console.log(e)
    }
    const onRelease=(e)=>{
        clearInterval(timer)
        setTimer(null)
        console.log(e)
}

*/