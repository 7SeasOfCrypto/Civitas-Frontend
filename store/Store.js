import create from 'zustand'
import {mapGenerator,materialGenerator} from './MapGenerator'



export const useStore = create(set => ({
  listBuild:[
    


  ],



  
  maps:mapGenerator(50,50),
  placeBuilding:{isAdding:true,model:0},
  updateMap: (newMap)=>set({ maps:{map:newMap,mapMaterial:materialGenerator(newMap)} }),
  addBuilding: (coords) => set(state => ({listBuild: [...state.listBuild,{
    x:coords.x, 
    y:coords.y,
    id:2,
    id_model:0,
    level:0,
    completed:true

  }]}))
}))

/*
    {x:3,y:3,Id:2,id_model:0,level:0,completed:true},
    {x:1,y:4,Id:3,id_model:0,level:0,completed:true},
    {x:20,y:20,Id:4,id_model:1,level:0,completed:true},

  */