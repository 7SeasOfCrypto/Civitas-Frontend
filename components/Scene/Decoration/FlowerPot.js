import { useStore } from '@/store/Store'
import FlowerPot from '@/models/FlowerPot'
import {Merged}from '@react-three/drei'
import { CELL_SIZE } from 'constants'
const FlowerPotDecor = () => {
    const {mapMaterial}=useStore(state=>state.maps)
    console.log(mapMaterial[3])
    const flowerMesh= mapMaterial[5].map((value,index)=>
        
            <group key={index} >
            <FlowerPot position={[(value.x+.5)*CELL_SIZE, 2,(value.z+.5)*CELL_SIZE]} scale={3} key={index}/>
        </group>
        

    )
    const flower=FlowerPot
//mapMaterial[5].map((value,index)=> )
    return (
        <Merged meshes={[flower]}>
            {
                (Flower ) => (
                    <>
                        <Flower position={[(5.5)*CELL_SIZE, 2,(10.5)*CELL_SIZE]} scale={3} />
                        <Flower position={[(10.5)*CELL_SIZE, 2,(14.5)*CELL_SIZE]} scale={3}/>
                    </>
                )
    
            }
        </Merged>
        )
    
};

export default FlowerPotDecor;


/*----------------------------------------------------------------

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const {mapMaterial}=useStore(state=>state.maps)
    console.log(mapMaterial[3])

  const group = useRef()
  const { nodes, materials } = useGLTF('/FlowerPot-transformed.glb')


  return (
    <Merged meshes={nodes}>
      {({ flowerpot, Filter, Pipe }) => (
        <>
          <Fl__0/>
          <Filter position={[1, 2, 3]} />
          <Pipe position={[4, 5, 6]} />
        </>
      )}
    </Merged>
  )

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.FlowerPot__0.geometry} material={materials['Scene_-_Root']} />
    </group>
  )
}

useGLTF.preload('/FlowerPot-transformed.glb')

*/