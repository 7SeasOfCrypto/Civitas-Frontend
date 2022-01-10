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
            <Plane args={[2, 2]} />
            <Sphere>
                <meshBasicMaterial attach="material" color="hotpink" />
            </Sphere>
            
        </>
    )
}

export default Preloader