import { useRef } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'


const Ground = () => {
    const planeRef = useRef(undefined)
    return (
        <>
            <mesh ref={planeRef} position={[CELL_SIZE*25 , 0, CELL_SIZE*25]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>

                <planeBufferGeometry args={[CELL_SIZE * 50, CELL_SIZE * 50]} />
                <meshBasicMaterial color="green" />

            </mesh>
            <gridHelper position={[CELL_SIZE*25 , 0, CELL_SIZE*25]} args={[CELL_SIZE*50, 50, `white`, `gray`]} scale={1} divisions={50}/>
        </>
    )
}

export default Ground