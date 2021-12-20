import { useRef,useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useFrame } from '@react-three/fiber'
import { useStore } from 'store'
import SMCastle from '@/models/SMCastle'







const placeMarker=(size)=>{
    const {width,height}=size
    
    const array=new Array(width*height).fill(0).map((value,index)=> {
        
        return( 
            
            <mesh  position={[3.3*(Math.floor(index/height)) ,.1,(3.3*(index%height))]} key={index}>
                <boxGeometry  args={[3,.2, 3]} />    
                <meshStandardMaterial color= 'white' translucent alpha={0} />
                </mesh>)
        })

        return <group position={[-3.3*width/2,0,-3.3*height/2]}>{array}</group>

}

const CreateBuilding = () => {
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const [dragPosition,setDragPosition] = useState({x:0,z:0})
    const dragGroup = useRef(null)
    const size={width:3,height:3}
    const dragMarker= placeMarker(size)
    const pointerMove = (e) => {
        const {x:prevX, y:prevY}= dragPosition

        setDragPosition({x:Math.floor(e.point.x/3.33)*3.33  ,z:Math.floor(e.point.z/3.33)*3.33})

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