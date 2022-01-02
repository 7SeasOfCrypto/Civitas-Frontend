import {useState,useEffect} from 'react'
import { extend, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from 'three'
import { useStore } from '@/store/Store'
import InstancedFloor from './InstancedFloor'




const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const tempUV = new THREE.Vector2()
const colors = [ 0x006CFF, 0xFF0000, 0x2AFF00, 0x00FFCD, 0xFF00E8, 0xFFC100, 0xA200FF]
//const colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff]

const Ground = ({ capture = false, setHover }) => {

  const [textures,setTextures]=useState([])

    const { map,mapMaterial } = useStore(state=>state.maps)
    const  maps  = useStore(state=>state.maps)
  console.log(maps)
    
    const [difuse] = useLoader(THREE.TextureLoader, ['/Textures/floorTile.webp'])
    useEffect(()=>{
      const Textures=colors.map((value,index)=>{ 
       const newTexture= difuse.clone()
       newTexture.wrapS = difuse.wrapT = THREE.RepeatWrapping
       newTexture.repeat.set(1/8, 1)
       newTexture.offset.set(index/8,0)
       newTexture.needsUpdate=true
        return newTexture
      
      })
      
      setTextures(Textures)

    },[difuse])
    

    console
    
    
    const materials=colors.map((value,index)=> new THREE.MeshStandardMaterial({map:textures[index]}))
    const GroundTile= mapMaterial.map((value,index)=> <InstancedFloor key={index} matMap={value} material={materials[index]}/>)

    
    return (
        <>
        <group renderOrder={1}>
            

            {textures.length!==0 ?GroundTile:null}
            
        </group>
        </>
    )
}

export default Ground
