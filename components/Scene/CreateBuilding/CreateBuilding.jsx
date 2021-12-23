import { useRef,useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useFrame } from '@react-three/fiber'
import { useStore } from 'store'
import SMCastle from '@/models/SMCastle'
import { ArrayCamera } from 'three'







const placeMarker=(size)=>{
    const {width,height}=size
    
    const arrayPos= new Array(width).fill().map((value,row)=> new Array(height).fill().map( (value,col)=>{
        
        const displaceW= width%2===0? width/2 : (width+1)/2
        const displaceH= height%2===0? height/2 : (height+1)/2

        console.log(displaceW,displaceH)
        return [row - displaceW+1,col-displaceH +1 ]
    }))
    
    
    //console.log(arrayPos.flat())
    return arrayPos.flat().map((value,index)=>
    <mesh  position={[ value[0]*CELL_SIZE,1,value[1]*CELL_SIZE]} key={index}>
        <boxGeometry  args={[3,.2, 3]} />    
        <meshStandardMaterial color= 'blue' transparent opacity={1} />
    </mesh>) 
 
/*
    const arrayBoxes=new Array(width*height).fill(0).map((value,index)=> {
        




        return( 
            
            <mesh  position={[3.3*( -0.5 + Math.floor(index/height)) ,.1,(3.3*(-0.5+index%height))]} key={index}>
                <boxGeometry  args={[3,.2, 3]} />    
                <meshStandardMaterial color= 'white' transparent opacity={.7} />
                </mesh>)
        })
        const groupDispX=0
        const groupDispZ=0
        return (<group >
        <mesh  >
            <boxGeometry  args={[1,3,1]} />    
            <meshStandardMaterial color= 'white' transparent opacity={1} />
        </mesh>
        <group position={[groupDispX,0,groupDispZ]}>
            {arrayBoxes}
        </group>
        </group>)*/

}

const CreateBuilding = ({cellHover}) => {
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const [dragPosition,setDragPosition] = useState({x:1,z:1})
    
    const size={width:4,height:4}
    const {width,height}=size
    const gridl=placeMarker(size)
    const minposX= width%2===0? (width-2)/2 :(width-1)/2
    const minposZ= height%2===0? (height-2)/2 :(height-1)/2
    
    
    const pivotX=cellHover.x<minposX? minposX*CELL_SIZE +CELL_SIZE/2 : cellHover.x*CELL_SIZE+CELL_SIZE/2
    const pivotZ=cellHover.z<minposX? minposZ*CELL_SIZE +CELL_SIZE/2 : cellHover.z*CELL_SIZE+CELL_SIZE/2

    if (isAdding)
        return (
            <>
                <group  position={[ pivotX,0,pivotZ ]}>
                    {gridl}
                </group>
                <gridHelper
                    position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]}
                    args={[CELL_SIZE * 50, 50, `white`, `gray`]}
                    scale={1}
                    divisions={50}
                    
                />
               
            </>
        )
    return null


}

export default CreateBuilding

/*


const CreateBuilding = () => {
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const [dragPosition,setDragPosition] = useState({x:0,z:0})

    
    const dragGroup = useRef(null)
    const size={width:2 ,height:3}
    const dragMarker= placeMarker(size)
    const pointerMove = (e) => {
        const {x:prevX, y:prevY}= dragPosition
        const PosX=  Math.round(e.point.x/3.33)*3.33
        const PosZ=  Math.round(e.point.z/3.33)*3.33

        setDragPosition({x: PosX ,z:PosZ})

    }
    useFrame((clock)=>{
        if(dragGroup!==null)
        {
            dragGroup.current.position.x=dragPosition.x;
            dragGroup.current.position.z=dragPosition.z;
        }
    })
    


    if (isAdding)
        return (
            <>
            <group ref={dragGroup}>
                {dragMarker}
                </group>
                <gridHelper
                    position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]}
                    args={[CELL_SIZE * 50, 50, `white`, `gray`]}
                    scale={1}
                    divisions={50}
                    onPointerMove={pointerMove}
                />
            </>
        )
    return null


}

export default CreateBuilding

*/

/* =================================================================

const placeMarker=(size)=>{
    const {width,height}=size
    
    const arrayBoxes=new Array(width*height).fill(0).map((value,index)=> {
        


        return( 
            
            <mesh  position={[3.3*( -0.5 + Math.floor(index/height)) ,.1,(3.3*(-0.5+index%height))]} key={index}>
                <boxGeometry  args={[3,.2, 3]} />    
                <meshStandardMaterial color= 'white' transparent opacity={.7} />
                </mesh>)
        })
        const groupDispX=0
        const groupDispZ=0
        return (<group >
        <mesh  >
            <boxGeometry  args={[1,3,1]} />    
            <meshStandardMaterial color= 'white' transparent opacity={1} />
        </mesh>
        <group position={[groupDispX,0,groupDispZ]}>
            {arrayBoxes}
        </group>
        </group>)

}
*/