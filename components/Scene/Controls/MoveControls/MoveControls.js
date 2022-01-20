import {useCallback,useMemo,Suspense} from 'react'

import {useMatcapTexture} from '@react-three/drei'
import { CELL_SIZE } from 'constants'
import { useStore } from '@/store/Store'
import ArrowMove from '@/models/ArrowMove'
import {modelsBuild} from 'models'



const Marker = (size,collision) => {
    
    const {width,height} = size
    
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? (width+1) / 2 : (width+ 1) / 2
        const displaceH = height % 2 === 0 ? (height-1) / 2+1 : (height + 1) / 2
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

    
    const { Pivot, geoCenter,size,type } = useStore(state => state.moveMode)
    const {collisionArray,isCollision} = useStore(state=>state.collision)
    const {enterRotate}=useStore(state=>state.actions)
    const [matcapIsNotValid] = useMatcapTexture('E80404_B50404_CB0404_FC3333')
    const [matcapIsValid] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04')
    
    const Model=useMemo(() =>{
        const typeModels=modelsBuild.find((modeldata,index)=>modeldata.type===type)
        return typeModels.models[2]
    },[type])
    const placeMarker=Marker(size,collisionArray)

    const confirmPosition=(e)=>{
        if(!isCollision &&e.button===0)
        {
            enterRotate()
        }
    }
        console.log(geoCenter.x,geoCenter.z)
    return (
        <>

            <group position={[geoCenter.x , 0, geoCenter.z]} >
                <Suspense>
                {placeMarker}
                <ArrowMove position={[0,.5,0]} />
                <Model onPointerDown={confirmPosition} position={[0,.3,0]} >
                    <meshMatcapMaterial attach="material" matcap={isCollision ? matcapIsNotValid : matcapIsValid} transparent opacity={isCollision ? .4 : 1} />
                </Model>
                
                </Suspense>
    
            </group>
            <mesh>
                <boxGeometry position= {[Pivot.x,0,Pivot.y] } args={[.5,3,.5]}>
                    <meshStandardMaterial color={0x00ffff}   ></meshStandardMaterial>
                </boxGeometry>
            </mesh>
        </>
    )
}
export default MoveControls