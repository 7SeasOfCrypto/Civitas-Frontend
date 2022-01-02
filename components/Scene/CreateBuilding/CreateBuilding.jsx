import { useRef, useState,useEffect } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useStore } from 'store'
import { hoverAction } from '@use-gesture/react'

const placeMarker = (size,map,collision) => {
    const { width, height } = size
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? width / 2 : (width + 1) / 2
        const displaceH = height % 2 === 0 ? height / 2 : (height + 1) / 2
        return [row - displaceW + 1, col - displaceH + 1]
    }))

    const CollFlat=collision.flat()

    return arrayPos.flat().map((value, index) =>
        <mesh position={[value[0] * CELL_SIZE, .4, value[1] * CELL_SIZE]} key={index}>
            <boxGeometry args={[3, .7, 3]} />
            <meshStandardMaterial color={CollFlat[index]===true?'red':'blue'} transparent opacity={1} />
        </mesh>)


}

const checkPlacement=({cursorPoint,map,rotation,size})=>{

    
    
    const bottom= size.width%2===0?  (cursorPoint.x -(size.width)/2):(cursorPoint.x -(size.width-1)/2)
    const left= size.height%2===0?(cursorPoint.z - (size.height-2)/2):(cursorPoint.z - (size.height-1)/2)
    const collision=new Array(size.width).fill().map((value,index)=>new Array(size.height).fill(false) )
    let isCollision=false;
    
    for (let i=0;i<3;i++)
    {

        
        for(let j=0;j<3;j++)
        {
            
            collision[i][j]=map[bottom+i][j+left]!==0
            //console.log(top-i,j+left)
            //isCollision= isCollision || map[i+top][i+left]!==0 

        }
    
    }
    return collision
    
    
    
}


const CreateBuilding = ({ cellHover }) => {
    const { map } = useStore(state=>state.maps)
    
    const [size,setSize]=useState({ width: 3, height: 3 })
    const [collision,setCollision]=useState(new Array(size.width).fill().map((value,index)=>new Array(size.height).fill(false) ))
    const [cursorPoint,setCursorPoint]=useState({x:2,z:2})

    useEffect(()=>{
        const minposX = width % 2 === 0 ? (width - 2) / 2 : (width - 1) / 2
        const maxposX= width % 2 === 0 ? 49-(width - 2) / 2 : 49-(width - 1) / 2
        const minposZ = height % 2 === 0 ? (height - 2) / 2 : (height - 1) / 2
        const maxposZ= height % 2 === 0 ? 49-(height - 2) / 2 : 49-(height - 1) / 2
        const PivoteX = cellHover.x < minposX ? minposX : cellHover.x>maxposX? maxposX: cellHover.x 
        const PivoteZ = cellHover.z < minposZ ? minposZ : cellHover.z>maxposZ? maxposZ: cellHover.z 
        if(PivoteX!==cursorPoint.x || PivoteZ!==cursorPoint.x)
        {
            setCursorPoint({x:PivoteX,z:PivoteZ})
        }

    },[cellHover,height,width])

    

    const { isAdding, model } = useStore(state => state.placeBuilding)
    
    

    

    const { width, height } = size
    const gridl = placeMarker(size,map,collision)
    const minposX = width % 2 === 0 ? (width - 2) / 2 : (width - 1) / 2
        const maxposX= width % 2 === 0 ? 49-(width - 2) / 2 : 49-(width - 1) / 2
        const minposZ = height % 2 === 0 ? (height - 2) / 2 : (height - 1) / 2
        const maxposZ= height % 2 === 0 ? 49-(height - 2) / 2 : 49-(height - 1) / 2
    const pivotX = cellHover.x < minposX ? minposX * CELL_SIZE + CELL_SIZE / 2 : cellHover.x>maxposX? maxposX* CELL_SIZE+CELL_SIZE / 2: cellHover.x * CELL_SIZE + CELL_SIZE / 2
    const pivotZ = cellHover.z < minposZ ? minposZ * CELL_SIZE + CELL_SIZE / 2 : cellHover.z>maxposZ? maxposZ*CELL_SIZE+CELL_SIZE/2 :cellHover.z * CELL_SIZE + CELL_SIZE / 2
    
    useEffect(() =>{
        console.log('check')
        setCollision(checkPlacement({cursorPoint, map,size}))
        
    },[cursorPoint,map,size])


    if (isAdding)
        return (
            <>
                <group position={[pivotX, 0, pivotZ]}>
                    {gridl}
                </group>
                <gridHelper
                    position={[CELL_SIZE * 25, .5, CELL_SIZE * 25]}
                    args={[CELL_SIZE * 50, 50, `white`, `gray`]}
                    scale={1}
                    divisions={50}
                />
            </>
        )
    return null
}

export default CreateBuilding

