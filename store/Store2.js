import create from 'zustand'
import {mapGenerator,materialGenerator} from './MapGenerator'


const enterAddMode=(set)=>{

  set(state=>{
        
    return({placeBuilding:{isAdding:true,isPlaced:false,model:(state.placeBuilding.model+1)%14}})
  })

}
const enterRotateMode=(set)=>{

  set(state=>{
        
    return({placeBuilding:{isAdding:true,isPlaced:true,model:0}})
  })

}
const evolveBuilding=(set)=>{
  
  const listBuild=api.getState().listBuild
  let hasChange=false
  const evolvedBuildList=listBuild.map((value,index)=>{
    
    const {timeCreated,completed,buildTime}=value
    if (completed===2)
      return value
    
    const timeElapsed =(new Date().getTime()-timeCreated) 
    
    const percent=timeElapsed<buildTime*1000? (timeElapsed*100)/(buildTime*1000):100
    
    const evolveState= percent<50?0:percent<100?1:2
    if(evolveState!==completed)
      hasChange=true
      

    return {...value,completed:evolveState}
  })
  if(hasChange)
  {
    set({listBuild:evolvedBuildList})
  }
  
  

  

}

const [useStore ,api]= create(set => ({
  timer:createTimer(set),
  enterRotateMode:(coord)=>set(state=> ({placeBuilding:{isAdding:true,isPlaced:true,model:state.placeBuilding.model,x:coord.x,y:coord.y}})),
  listBuild:[
    ],
  myBuildings:[{
    id: '0x00000',
  },
  {
    id: '0x21341',
  },
  {
    id: '0x33333',
  }],
  colors:{roof:0xff0000,flag1:0x00ff00,flag2:0x0000ff},
  maps:mapGenerator(50,50),
  placeBuilding:{isAdding:false,isPlaced:false,model:2},
  evolveBuilding: ()=>evolveBuilding(set),
  enterAddMode:()=>enterAddMode(set),
  leaveAddMode:()=>set(state=> ({placeBuilding:{isAdding:false,isPlaced:false,model:state.placeBuilding.model}})),
  updateMap: (newMap)=>set({ maps:{map:newMap,mapMaterial:materialGenerator(newMap)} }),
  addBuilding: (coords) => set(state => ({listBuild: [...state.listBuild,{
    x:coords.x, 
    y:coords.y,
    Id:state.listBuild.length,
    id_model:state.placeBuilding.model,
    level:0,
    completed:0,
    timeCreated:new Date().getTime(),
    buildTime:10

  }]
  

})),
}))


function createTimer(){

  return setInterval(() => {

    
    api.getState().evolveBuilding()
  }, 1000);
}




export {useStore}
