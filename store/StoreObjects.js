
import create from 'zustand'


const loadTextures=({set})=>{
   
}
const [useObjects]= create(set => ({
    isAdding:false,
    loadTextures: (TextureList)=>loadTextures({TextureList,set}),

}))


export {useObjects}

