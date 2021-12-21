import { models } from 'models'
import {useStore} from 'store'
import {useSpring} from '@react-spring/three'
import {CELL_SIZE} from 'constants'
import {useGesture } from '@use-gesture/react'
const Buildings = () => {
    const { listBuild } = useStore()
    const ArrayBuild= listBuild.map((value,index)=> {
        const {x,y,Id,id_model,level,completed}=value
        const {id,maxlevel,complete,build}=models[id_model]
        const modelData= completed? complete[level]:build[level]
        const {size,model,colored} =modelData
        const Model=model
        const [spring, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, 0, 0]}))
        const bind = useGesture(({
            onDrag: ({ offset: [x, y],event:e}) => {set({ position: [e.point.x, 0,e.point.z]})},
            onHover: ({ hovering }) => set({ scale: hovering ? [1.1, 1.1, 1.1] : [1, 1, 1]}),
        }))
        return (<Model {...bind()} {...spring}  
        position={[(x+size/2)*CELL_SIZE,0,(y+size/2)*CELL_SIZE]} 
        key={index} />)
    })
    return(ArrayBuild)

}

export default Buildings