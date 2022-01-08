import {useState,useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { CELL_SIZE } from 'constants'
import {models} from 'models'
import { useStore } from '@/store/Store'
import {useMatcapTexture,useTexture} from '@react-three/drei'
import Arrow from '@/models/Arrow'

const createNewMap=({cursorPoint,map,rotation,size})=>{

    const bottom= size.width%2===0?  (cursorPoint.x -(size.width)/2):(cursorPoint.x -(size.width-1)/2)
    const left= size.height%2===0?(cursorPoint.z - (size.height-2)/2):(cursorPoint.z - (size.height-1)/2)
    const collision=new Array(size.width).fill().map((value,index)=>new Array(size.height).fill(false) )
    let newMap= [...map]

    for (let i=0;i<size.width;i++)
    {
        for(let j=0;j<size.height;j++)
        {
            if(bottom+i>=0 && bottom+i<=49 && left+j>=0 && left+i<=49 )
            {
                    if(newMap[bottom+i][left+j]===0)
                        newMap[bottom+i][left+j]=1
            }
        }
    }
    return newMap
}


const PlaceBox = ({cursorPoint,size,center,modelSelected}) => {
    const group=useRef(null)
    const { maps,placeBuilding,  leaveAddMode} = useStore()
    const [rots,setRots]=useState({rotation:0,prevRotation:0})
    const {map} =maps
    const {width,height}=size
    const Model=models[modelSelected].complete.model
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const {addBuilding,updateMap}=useStore()
    
    const geomCenter={x:center.x+(width+1)%2*.5*CELL_SIZE,z:center.z+(height+1)%2*.5*CELL_SIZE}
    //const [matcap1, matcap2] = useTexture(['matcap-1.png', 'matcap-2.png'])
    const [matcapIsNotValid] = useMatcapTexture('E80404_B50404_CB0404_FC3333' )
    const [matcapIsValid] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04' )
    const onRotateBuildingL=()=>{
        setRots({prevRotation:rots.rotation,rotation: rots.rotation+1} )
    }
    const onRotateBuildingR=()=>{
        setRots({prevRotation:rots.rotation,rotation: rots.rotation-1} )
    }
    const onPlaceBuilding=()=>{
        addBuilding({x:cursorPoint.z,y:cursorPoint.x})
        updateMap(createNewMap({cursorPoint, map,size}))
        leaveAddMode()
    }

    return (
        <>
            <group position={[geomCenter.x, 0,geomCenter.z]}>
                <group ref={group} rotation={[0,Math.PI/2*rots.rotation,0]} onClick={onPlaceBuilding}>
                    <Model />
                </group>
                <Arrow scale={[1.5,1.5,1.5]}  position={[CELL_SIZE,11,0]} rotation={[-Math.PI,Math.PI,0]} onPointerDown={onRotateBuildingL}></Arrow>    
                <Arrow scale={[1.5,1.5,1.5]} position={[0,11,CELL_SIZE]} rotation={[-Math.PI,Math.PI/2,-Math.PI]} onPointerDown={onRotateBuildingR}></Arrow>    
            </group>
        </>
    )
}
export default PlaceBox
