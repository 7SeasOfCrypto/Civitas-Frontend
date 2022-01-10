import {useCallback,useMemo} from 'react'

import {useMatcapTexture} from '@react-three/drei'
import { CELL_SIZE } from 'constants'
import { useStore } from '@/store/Store'
import ArrowMove from '@/models/ArrowMove'
import {models} from 'models'



const Marker = (size,collision) => {
    
    const {width,height} = size
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? width / 2 : (width + 1) / 2
        const displaceH = height % 2 === 0 ? height / 2 : (height + 1) / 2
        return [row - displaceW + 1, col - displaceH + 1]
    }))
    
    const CollFlat = collision.flat()

    return arrayPos.flat().map((value, index) =>
        <mesh position={[value[0] * CELL_SIZE, .5, value[1] * CELL_SIZE]} key={index} >
            <boxGeometry args={[3, .7, 3]} />
            <meshStandardMaterial color={CollFlat[index]  ? 'red' : 'green'} transparent opacity={.7} />
            
        </mesh>)


}

const MoveControls = () => {
    const { Pivot, geoCenter,size } = useStore(state => state.hoverData)
    const {collisionArray,isCollision} = useStore(state=>state.collision)
    const {enterRotateMode} = useStore(state=>state.actions)
    const {type}=useStore(state=>state.addMode.owned)
    const [matcapIsNotValid] = useMatcapTexture('E80404_B50404_CB0404_FC3333')
    const [matcapIsValid] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04')

    const Model=useMemo(() =>{
        const typeModels=models.find((modeldata,index)=>modeldata.type=type)
        return typeModels.models[2]
    },[type])
    const placeMarker=Marker(size,collisionArray)

    const confirmPosition=(e)=>{
        if(!isCollision &&e.button===0)
        {
            enterRotateMode()
        }
    }
    return (
        <>

            <group position={[geoCenter.x, 0, geoCenter.z]} >
                <ArrowMove position={[0,.3,0]} />
                {placeMarker}
                <Model onPointerDown={confirmPosition} position={[0,.3,0]} >
                    <meshMatcapMaterial attach="material" matcap={isCollision ? matcapIsNotValid : matcapIsValid} transparent opacity={isCollision ? .4 : 1} />
                </Model>
    
            </group>
        </>
    )
}
export default MoveControls