import { useRef,useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useFrame } from '@react-three/fiber'
import { useStore } from 'store'
import SMCastle from '@/models/SMCastle'







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

const CreateBuilding = () => {
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const [dragPosition,setDragPosition] = useState({x:1,z:1})

    
    const dragGroup = useRef(null)
    const size={width:3 ,height:3}
    const minposX=Math.floor(size.height/2)
    const minposZ=Math.floor(size.width/2)
    
    //const dragMarker= placeMarker(size)
    const pointerMove = (e) => {
        /*
        const {x:prevX, y:prevY}= dragPosition
            

        const PosX=e.point.x>minposX ?  Math.floor(e.point.x/3.33):minposX
        const PosZ=e.point.z>minposZ ?  Math.floor(e.point.z/3.33):minposZ
        console.log(`${minposX},${minposZ},:(${PosX},${PosZ})`)
        if (PosX!== dragPosition.x || PosZ!==dragPosition.z)
            setDragPosition({x: PosX ,z:PosZ})
        */
        
    }
    
    const pivotWidth= 3.33*size.width
    const pivotHeight=3.33*size.height
    const pivotX= size.height%2===0?dragPosition.x*3.33:(dragPosition.x+.5)*3.33 
    const pivotZ= size.width%2===0?dragPosition.z*3.33:(dragPosition.z+.5 )*3.33 

    if (isAdding)
        return (
            <>
            <group ref={dragGroup}>
                
                </group>
                <gridHelper
                    position={[CELL_SIZE * 25, 0, CELL_SIZE * 25]}
                    args={[CELL_SIZE * 50, 50, `white`, `gray`]}
                    scale={1}
                    divisions={50}
                    //onPointerMove={pointerMove}
                />
                <mesh  position={[(dragPosition.x+ (size.height%2*.5))*3.33,0,(dragPosition.z + (size.width%2*.5))*3.33]}>
                    <boxGeometry  args={[1,3,1]} />    
                    <meshStandardMaterial color= 'red' transparent opacity={1} />
               
                </mesh>
                <group >
                    <mesh  position={[ pivotX,0,pivotZ ]}>
                        <boxGeometry  args={[pivotHeight,.2,pivotWidth]} />    
                        <meshStandardMaterial color= 'white' transparent opacity={1} />
                    </mesh>
                    

                </group>
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