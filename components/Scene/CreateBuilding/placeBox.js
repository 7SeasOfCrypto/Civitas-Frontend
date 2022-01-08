import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { CELL_SIZE } from 'constants'
import { models } from 'models'
import { useStore } from '@/store/Store'
import { useMatcapTexture } from '@react-three/drei'

const placeMarker = ({ size, map, collisionArray }) => {
    const { width, height } = size
    const arrayPos = new Array(width).fill().map((value, row) => new Array(height).fill().map((value, col) => {
        const displaceW = width % 2 === 0 ? width / 2 : (width + 1) / 2
        const displaceH = height % 2 === 0 ? height / 2 : (height + 1) / 2
        return [row - displaceW + 1, col - displaceH + 1]
    }))

    const CollFlat = collisionArray.flat()
    return arrayPos.flat().map((value, index) =>
        <mesh position={[value[0] * CELL_SIZE, .5, value[1] * CELL_SIZE]} key={index} side={THREE.FrontSide}>
            <boxGeometry args={[3, .7, 3]} />
            <meshStandardMaterial color={CollFlat[index] !== 0 ? 'red' : 'green'} transparent opacity={.7} />
        </mesh>)


}

const checkPlacement = ({ cursorPoint, map, size }) => {

    const bottom = size.width % 2 === 0 ? (cursorPoint.x - (size.width) / 2) : (cursorPoint.x - (size.width - 1) / 2)
    const left = size.height % 2 === 0 ? (cursorPoint.z - (size.height - 2) / 2) : (cursorPoint.z - (size.height - 1) / 2)
    const collision = new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false))
    let isCol = false
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            collision[i][j] = map[bottom + i][j + left]
            isCol = isCol || map[bottom + i][j + left] !== 0
        }
    }
    return { collisionArray: collision, isCollision: isCol }
}

const PlaceBox = ({ cursorPoint, size, center, modelSelected }) => {
    const [collision, setCollision] = useState({ collisionArray: new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false)), isCollision: false })
    const { maps, enterRotateMode } = useStore()
    const { map } = maps
    const { width, height } = size
    const Model = models[modelSelected].complete.model
    const geomCenter = { x: center.x + (width + 1) % 2 * .5 * CELL_SIZE, z: center.z + (height + 1) % 2 * .5 * CELL_SIZE }
    //const [matcap1, matcap2] = useTexture(['matcap-1.png', 'matcap-2.png'])
    const [matcapIsNotValid] = useMatcapTexture('E80404_B50404_CB0404_FC3333')
    const [matcapIsValid] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04')
    useEffect(() => {
        setCollision(checkPlacement({ cursorPoint, map, size }))
    }, [map, cursorPoint, size])

    const { collisionArray, isCollision } = collision
    const PlaceMark = placeMarker({ size, map, collisionArray })
    const onPlaceBuilding = (e) => {
        if (e.button === 0)
        {
            if(!isCollision)
            enterRotateMode({ x: cursorPoint.x, y: cursorPoint.y })
        }
    }

    return (
        <>

            <group position={[geomCenter.x, 0, geomCenter.z]}>
                {PlaceMark}
                {
                    
                <Model onPointerDown={onPlaceBuilding}>
                    <meshMatcapMaterial attach="material" matcap={isCollision ? matcapIsNotValid : matcapIsValid} transparent opacity={isCollision ? .4 : 1} />
                </Model>
                
                }
            </group>
        </>
    )
}
export default PlaceBox
