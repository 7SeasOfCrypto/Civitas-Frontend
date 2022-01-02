import create from 'zustand'
import {mapGenerator} from './MapGenerator'
export const useStore = create(set => ({
  listBuild:[
    {x:1,y:1,Id:1,id_model:0,level:0,completed:true},
  ],
  hasPlaceMarker:false,



  map:mapGenerator(50,50),
  placeBuilding:{isAdding:true,model:0},
  addBuilding: (coords) => set(state => ({listBuild: [...state.listBuild,{
    x:coords.x, 
    y:coords.y,
  }]})),
  showPlaceMarker: (value) => set({hasPlaceMarker:value})
}))

/*
    {x:3,y:3,Id:2,id_model:0,level:0,completed:true},
    {x:1,y:4,Id:3,id_model:0,level:0,completed:true},
    {x:20,y:20,Id:4,id_model:1,level:0,completed:true},

  */