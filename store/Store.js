import create from 'zustand'
import {mapGenerator,materialGenerator} from './MapGenerator'


const enterAddMode=(set)=>{

  set(state=>{
        console.log(state)
    return({placeBuilding:{isAdding:true,isPlaced:false,model:1}})
  })


}


export const useStore = create(set => ({
<<<<<<< HEAD
  listBuild:[],
  myBuildings:[{
    id: '0x00000',
  },
  {
    id: '0x21341',
  },
  {
    id: '0x33333',
  }],
=======
  listBuild:[
    {x:4,y:1,Id:2,id_model:0,completed:0},
    {x:8,y:1,Id:3,id_model:0,completed:1},
    {x:12,y:1,Id:4,id_model:0,completed:2},],
  colors:{roof:0xff0000,flag1:0x00ff00,flag2:0x0000ff},
>>>>>>> 614639bc11ee116bbd1f6b7ea07357f710573242
  maps:mapGenerator(50,50),
  placeBuilding:{isAdding:false,isPlaced:false,model:0},
  enterAddMode:()=>enterAddMode(set),
  leaveAddMode:()=>set(state=> ({placeBuilding:{isAdding:false,isPlaced:false,model:0}})),
  updateMap: (newMap)=>set({ maps:{map:newMap,mapMaterial:materialGenerator(newMap)} }),
  addBuilding: (coords) => set(state => ({listBuild: [...state.listBuild,{
    x:coords.x, 
    y:coords.y,
    id:2,
    id_model:state.placeBuilding.model,
    level:0,
    completed:0

  }]})),
}))

/*
    {x:3,y:3,Id:2,id_model:0,completed:true},
    {x:1,y:4,Id:3,id_model:0,completed:true},
    {x:20,y:20,Id:4,id_model:1,completed:true},

  */