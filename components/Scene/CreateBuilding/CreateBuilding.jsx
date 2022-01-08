import { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react'
import { useMatcapTexture, useTexture } from '@react-three/drei'
import FloorController from '../FloorController'
import PlaceBox from './placeBox'
import TurnBox from './TurnBox'
import { CELL_SIZE } from 'constants'


import { useStore } from 'store'
import * as THREE from 'three'

import Arrow from '@/models/Arrow'

const placeMarker = (size, map, collision) => {
    const { width, height } = size
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? width / 2 : (width + 1) / 2
        const displaceH = height % 2 === 0 ? height / 2 : (height + 1) / 2
        return [row - displaceW + 1, col - displaceH + 1]
    }))

    const CollFlat = collision.flat()

    return arrayPos.flat().map((value, index) =>
        <mesh position={[value[0] * CELL_SIZE, .5, value[1] * CELL_SIZE]} key={index} side={THREE.FrontSide}>
            <boxGeometry args={[3, .7, 3]} />

            <meshStandardMaterial color={CollFlat[index] !== 0 ? 'red' : 'green'} transparent opacity={.7} />
        </mesh>)


}

const checkPlacement = ({ cursorPoint, map, rotation, size, setMaterial }) => {

    const bottom = size.width % 2 === 0 ? (cursorPoint.x - (size.width) / 2) : (cursorPoint.x - (size.width - 1) / 2)
    const left = size.height % 2 === 0 ? (cursorPoint.z - (size.height - 2) / 2) : (cursorPoint.z - (size.height - 1) / 2)
    const collision = new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false))
    let isCollision = false

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            collision[i][j] = map[bottom + i][j + left]
        }
    }
    return collision
}
const createNewMap = ({ cursorPoint, map, rotation, size }) => {

    const bottom = size.width % 2 === 0 ? (cursorPoint.x - (size.width) / 2) : (cursorPoint.x - (size.width - 1) / 2)
    const left = size.height % 2 === 0 ? (cursorPoint.z - (size.height - 2) / 2) : (cursorPoint.z - (size.height - 1) / 2)
    const collision = new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false))
    let newMap = [...map]

    for (let i = -1; i <= size.width; i++) {
        for (let j = -1; j <= size.height; j++) {
            if (bottom + i >= 0 && bottom + i <= 49 && left + j >= 0 && left + i <= 49) {
                if (newMap[bottom + i][left + j] === 0)
                    newMap[bottom + i][left + j] = 1
            }
        }
    }
    return newMap
}

const PlaceBuilding = () => {


}


const CreateBuilding = ({ cellHover }) => {
    const { maps, placeBuilding } = useStore()
    const { isAdding, isPlaced, model, x, z, rotation } = placeBuilding
    const [cursorPoint, setCursorPoint] = useState({ x: 2, z: 2 })
    const size = { width: 3, height: 3 }
    const { width, height } = size
    useEffect(() => {
        const minposX = width % 2 === 0 ? (width - 2) / 2 : (width - 1) / 2
        const maxposX = width % 2 === 0 ? 49 - (width - 2) / 2 : 49 - (width - 1) / 2
        const minposZ = height % 2 === 0 ? (height - 2) / 2 : (height - 1) / 2
        const maxposZ = height % 2 === 0 ? 49 - (height - 2) / 2 : 49 - (height - 1) / 2
        const PivoteX = cellHover.x < minposX ? minposX : cellHover.x > maxposX ? maxposX : cellHover.x
        const PivoteZ = cellHover.z < minposZ ? minposZ : cellHover.z > maxposZ ? maxposZ : cellHover.z
        setCursorPoint({ x: PivoteX, z: PivoteZ })
    }, [cellHover, height, width])

    const center = { x: cursorPoint.x * CELL_SIZE + CELL_SIZE / 2, z: cursorPoint.z * CELL_SIZE + CELL_SIZE / 2 }


    if (isAdding && !isPlaced) {
        
        return (
            <>
                <PlaceBox cursorPoint={cursorPoint} size={size} center={center} modelSelected={model}> </PlaceBox>

            </>
        )

    }

    if (isAdding) {
        return (
            <>
                <TurnBox cursorPoint={cursorPoint} size={size} center={center} modelSelected={model}> </TurnBox>

            </>
        )
    }
    return null
}

export default CreateBuilding
