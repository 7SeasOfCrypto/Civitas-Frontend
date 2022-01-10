import { useRef, useMemo } from 'react'

import { CELL_SIZE } from 'constants'
import { models } from 'models'
import { useStore } from '@/store/Store'
import { useMatcapTexture, useTexture } from '@react-three/drei'
import Arrow from '@/models/Arrow'
import ArrowRotate from '@/models/ArrowRotate'


const createNewMap = () => {
    //{cursorPoint,map,rotation,size}


    const bottom = size.width % 2 === 0 ? (cursorPoint.x - (size.width) / 2) : (cursorPoint.x - (size.width - 1) / 2)
    const left = size.height % 2 === 0 ? (cursorPoint.z - (size.height - 2) / 2) : (cursorPoint.z - (size.height - 1) / 2)
    const collision = new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false))
    let newMap = [...map]

    for (let i = 0; i < size.width; i++) {
        for (let j = 0; j < size.height; j++) {
            if (bottom + i >= 0 && bottom + i <= 49 && left + j >= 0 && left + i <= 49) {
                if (newMap[bottom + i][left + j] === 0)
                    newMap[bottom + i][left + j] = 1
            }
        }
    }
    return newMap
}


const SetRotation = () => {
    const group = useRef(null)
    const { geoCenter, rotation, owned } = useStore(state => state.addMode)
    const { id, type } = owned
    const { rotateRight,rotateLeft } = useStore(state => state.actions)



    //const [matcap1, matcap2] = useTexture(['matcap-1.png', 'matcap-2.png'])

    const [matcapIsNotValid] = useMatcapTexture('E80404_B50404_CB0404_FC3333')
    const [matcapIsValid] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04')

    const onRotateBuildingL = () => {
        rotateLeft()
    }
    const onRotateBuildingR = () => {
        rotateRight()
    }
    const onPlaceBuilding = () => {
        //addBuilding({x:cursorPoint.z,y:cursorPoint.x})
        //updateMap(createNewMap({cursorPoint, map,size}))
        //leaveAddMode()
    }
    const Model = useMemo(() => {
        const typeModels = models.find((modeldata, index) => modeldata.type = type)
        return typeModels.models[2]
    }, [type])

    return ( <group position={[geoCenter.x, 0, geoCenter.z]}>

                <group ref={group} rotation={[0, Math.PI / 2 * rotation, 0]} onClick={onPlaceBuilding}>
                    <ArrowRotate position={[0,.3,0]} rotation={[0, Math.PI, 0]} />
                    <Model position={[0,.3,0]}>

                    </Model>
                </group>
                <Arrow scale={[1.5, 1.5, 1.5]} position={[CELL_SIZE, 11, 0]} rotation={[-Math.PI, Math.PI, 0]} onPointerDown={onRotateBuildingL}></Arrow>
                <Arrow scale={[1.5, 1.5, 1.5]} position={[0, 11, CELL_SIZE]} rotation={[-Math.PI, Math.PI / 2, -Math.PI]} onPointerDown={onRotateBuildingR}></Arrow>
            </group>
    )
}
export default SetRotation
