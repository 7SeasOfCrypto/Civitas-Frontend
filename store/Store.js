import create from 'zustand'
import { mapGenerator } from './MapGenerator'
import { calcCollision } from './calcCollision'
import { CELL_SIZE } from 'constants'
import {models} from '/models/'
const enterAddMode = (set) => {

  set(state => {

    return ({ placeBuilding: { isAdding: true, isPlaced: false, model: (state.placeBuilding.model + 1) % 14 } })
  })

}
const enterRotateMode = (set) => {

  set(state => {

    return ({ placeBuilding: { isAdding: true, isPlaced: true, model: 0 } })
  })

}
const evolveBuilding = (set) => {

  const listBuild = api.getState().listBuild
  let hasChange = false
  const evolvedBuildList = listBuild.map((value, index) => {

    const { timeCreated, completed, buildTime } = value
    if (completed === 2)
      return value

    const timeElapsed = (new Date().getTime() - timeCreated)

    const percent = timeElapsed < buildTime * 1000 ? (timeElapsed * 100) / (buildTime * 1000) : 100

    const evolveState = percent < 50 ? 0 : percent < 100 ? 1 : 2
    if (evolveState !== completed)
      hasChange = true


    return { ...value, completed: evolveState }
  })
  if (hasChange) {
    set({ listBuild: evolvedBuildList })
  }

  //console.log(listBuild)



}

const [useStore] = create((set, get) => ({
  maps: { map: [], mapMaterial: [] },
  shouldUpdate: false,
  ownedBuildings: [{ id: 1, type: 1, completed: 0 }, { id: 2, type: 2, completed: 0 }],
  placedBuildings: [
    { x: 3, y: 1, buildId: 1, model: 0, level: 0, completes: 1, timeCreated: null, lastCollect: null, ROI: 10, chanceBreak: 10, }
  ],
  finishedBuildings: [],
  hoverData: { isCapturing: false, tile: { x: 0, z: 0 }, Pivot: { x: 0, z: 0 }, geoCenter: { x: 0, y: 0 },size:{width:1,height:1} },
  editMode: {
    isActive: false,
    isPlaced: false,
    buildID: null,
    rotation: 0,
    size: { width: 1, height: 1 },
  },

  addMode: {
    isActive: false,
    isPlaced: false,
    owned:{id:1,type:0} ,
    Pivot: { x: 0, z: 0 },
    geoCenter:{x:0,z:0},
    rotation: 0,
    size: { width: 3, height: 3 },
  },

  moveWidget:{isActive:false,Pivot:{x:0,y:0},geoCenter:{x:0,z:0},size:{width:3,height:3}},
  rotateWitget:{isActive:false,Pivot:{x:0,y:0},geoCenter:{x:0,z:0},size:{width:3,height:3},rotation:0},




  collision: {
      collisionArray: [],
      isCollision:false
  },

  actions: {
    initMap() {

      set((state) => ({ maps: mapGenerator(50, 50) }))
    },
    setPositionWidgets({tile}) {
      const widgetData=get().widgetData
      const map=get().maps.map
      const drawData = calcDrawData({ tile, size })
      const Pivot=drawData.Pivot
      if(tile.x!==Pivot.x || tile.y!==Pivot.y)
      {
        
      }

    },
    setHoverTile({ tile }) {
      const hoverData = get().hoverData
      const map=get().maps.map
      const addMode = get().addMode
      const editMode = get().editMode
      if (tile.x !== hoverData.tile.x || tile.z !== hoverData.tile.z) {
        let size = { width: 1, height: 1 }
        if (editMode.isActive)
          size = addMode.size
        else
          size = addMode.size
        const drawData = calcDrawData({ tile, size })

        set({ hoverData: { ...hoverData, tile: { x: tile.x, z: tile.z }, ...drawData } })
        
        set({collision:calcCollision(map,drawData.Pivot,size)})

      }
    },

    enterAddMode({ Id }) {
      const owned = get().ownedBuildings
      const buildData = owned[owned.findIndex((building, index) => building.Id === Id)]
      const modelData = models[models.findIndex(model => model.type === buildData.type)]

      //set({addMode:{ isActive:true,isPlace:false,owned:{id:1,type:buildData.type}, Pivot:{x:0,z:0},center:{x:0,z:0},rotation:0,size:modelData.size}})
      //set({hoverData:{...get().hoverData,isCapturing:true,size:modelData.size}})
    }, 
    enterRotateMode(){
      const addMode=get().addMode
      const hoverData=get().hoverData

      set({addMode:{...addMode,isPlaced:true,Pivot:hoverData.Pivot,geoCenter:hoverData.geoCenter}})
      set({hoverData: {isCapturing: false, tile: { x: 0, z: 0 }, Pivot: { x: 0, z: 0 }, geoCenter: { x: 0, z: 0 },size:{width:1,height:1}}})
    }, 
    rotateLeft(){
      console.log('rotateleft')
      const addMode=get().addMode
      set({addMode:{...addMode,rotation:(addMode.rotation+1)%4}})
    },
    rotateRight(){
      const addMode=get().addMode
      set({addMode:{...addMode,rotation:(addMode.rotation-1)%4}})
    }
  }



}))


function calcDrawData({ tile, size }) {
  const { width, height } = size
  const minposX = width % 2 === 0 ? (width - 2) / 2 : (width - 1) / 2
  const maxposX = width % 2 === 0 ? 49 - (width - 2) / 2 : 49 - (width - 1) / 2
  const minposZ = height % 2 === 0 ? (height - 2) / 2 : (height - 1) / 2
  const maxposZ = height % 2 === 0 ? 49 - (height - 2) / 2 : 49 - (height - 1) / 2
  const PivoteX = tile.x < minposX ? minposX : tile.x > maxposX ? maxposX : tile.x
  const PivoteZ = tile.z < minposZ ? minposZ : tile.z > maxposZ ? maxposZ : tile.z
  const center = { x: PivoteX * CELL_SIZE + CELL_SIZE / 2, z: PivoteZ * CELL_SIZE + CELL_SIZE / 2 }
  const geomCenter = { x: center.x + (width + 1) % 2 * .5 * CELL_SIZE, z: center.z + (height + 1) % 2 * .5 * CELL_SIZE }



  return ({ Pivot: { x: PivoteX, z: PivoteZ }, geoCenter: geomCenter })

}





function createTimer() {

  return setInterval(() => {


    api.getState().evolveBuilding()
  }, 1000)
}




export { useStore }

/*
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
  
  //console.log(listBuild)

  

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
*/