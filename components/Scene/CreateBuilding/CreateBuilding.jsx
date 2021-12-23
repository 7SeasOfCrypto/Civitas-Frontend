import { useRef, useState } from 'react'
import { ORIGIN_GRID, GRID_COL, GRID_ROW, CELL_SIZE } from 'constants'
import { useStore } from 'store'

const placeMarker = (size) => {
    const { width, height } = size
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? width / 2 : (width + 1) / 2
        const displaceH = height % 2 === 0 ? height / 2 : (height + 1) / 2
        return [row - displaceW + 1, col - displaceH + 1]
    }))
    return arrayPos.flat().map((value, index) =>
        <mesh position={[value[0] * CELL_SIZE, 1, value[1] * CELL_SIZE]} key={index}>
            <boxGeometry args={[3, .2, 3]} />
            <meshStandardMaterial color='blue' transparent opacity={1} />
        </mesh>)
}

const CreateBuilding = ({ cellHover }) => {
    const { isAdding, model } = useStore(state => state.placeBuilding)
    const [dragPosition, setDragPosition] = useState({ x: 1, z: 1 })
    const size = { width: 4, height: 4 }
    const { width, height } = size
    const gridl = placeMarker(size)
    const minposX = width % 2 === 0 ? (width - 2) / 2 : (width - 1) / 2
    const minposZ = height % 2 === 0 ? (height - 2) / 2 : (height - 1) / 2
    const pivotX = cellHover.x < minposX ? minposX * CELL_SIZE + CELL_SIZE / 2 : cellHover.x * CELL_SIZE + CELL_SIZE / 2
    const pivotZ = cellHover.z < minposX ? minposZ * CELL_SIZE + CELL_SIZE / 2 : cellHover.z * CELL_SIZE + CELL_SIZE / 2

    if (isAdding)
        return (
            <>
                <group position={[pivotX, 0, pivotZ]}>
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

