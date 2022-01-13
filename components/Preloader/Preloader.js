import {useEffect} from 'react'
import { Plane, Sphere,useTexture } from '@react-three/drei'
import {TexturesList} from 'constants'
import {useObjects} from '@/store/StoreObjects'
const Preloader = ({percent}) => {
    const value=useObjects()
    const TexturesArray=Object.keys(TexturesList).map((keyObject,index1)=> Object.keys( TexturesList[keyObject]).map((keyMaterial,index2)=>({keyObject:keyObject,keyMaterial:keyMaterial,src:TexturesList[keyObject][keyMaterial]})) )
    const Texturesload=TexturesArray.flat().map(value=>value.src)
    
    const Texturesloaded = useTexture(Texturesload)
    useEffect(() => {

        if(percent===100) 
        {

        }
    },[Texturesloaded,percent])

    return (
        <>
            
            <Sphere args={[2]}>
                <meshStandardMaterial attach="material" color="hotpink" metallness={1} roughness={0} opacity={1} transparent/>
            </Sphere>
            
        </>
    )
}

export default Preloader