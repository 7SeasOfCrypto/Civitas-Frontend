import create from 'zustand'
import { mapGenerator,materialGenerator } from './MapGenerator'
import { calcCollision } from './calcCollision'
import { CELL_SIZE } from 'constants'
import {modelsBuild} from '/models/'
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
  ownedBuildings: [{ id: 1, type: 6, completed: 0 }, { id: 2, type: 5, completed: 0 }],
  placedBuildings: [
    {
   
          Pivot: {x: 1,z: 6},
          BuildId: 1,
          type: 1,
          timeCreated:new Date().getTime(),
          lastCollect:new Date().getTime(),
          Roi:10,
          chanceBreak:30,
          buildTime:10,
          completed: 0,
          geoCenter: {x: 4.9999995,z:21.666664500000003},
          size:{width: 3,height:3},
          rotation: 0
      }
  ],
  isShopOpen: false,
  setShopOpen: (value) => set(() => ({isShopOpen:value})),
  isBuildActive:false,
  setBuildState: (value) => set(() => ({isBuildActive:value})),
  finishedBuildings: [],
  moveMode:{isActive:false},
  rotateMode:{isActive:false},
  collision: {
      collisionArray: [],
      isCollision:false

  },
  actions: {
    initMap() {
      set((state) => ({ maps: mapGenerator(50, 50) }))
    },
    setHoverTile({ tile }) {
      const moveData = get().moveMode
      const map=get().maps.map
      if (tile.x !== moveData.tile.x || tile.z !== moveData.tile.z) {
        const {size}=moveData
        const drawData = calcDrawData({ tile, size })
        set({ moveMode: { ...moveData, tile: { x: tile.x, z: tile.z }, ...drawData } })
        set({collision:calcCollision(map,drawData.Pivot,size)})
      }
    },
    enterMove({id}) {
      console.log(modelsBuild)
      const owned = get().ownedBuildings
      const buildData = owned.find((building, index) => building.id === id)
      
      set({rotateMode:{isActive:false}})      
      const modelData = modelsBuild.find(model => model.type === buildData.type)
      console.log("*************")
      console.log(modelData)
      console.log("*************")
      set({moveMode:{isActive:true,tile:{x:0,z:0},Pivot:{x:1,z:1},geoCenter:{x:modelData.size.width===2?CELL_SIZE:CELL_SIZE*1.5,z:modelData.size.height===2?CELL_SIZE:CELL_SIZE*1.5},id:id,type:buildData.type,size:modelData.size}})
      
    },
    enterRotate(){
      const moveData= get().moveMode
      set({moveMode:{isActive:false}})
      set({rotateMode:{isActive:true,Pivot:moveData.Pivot,geoCenter:moveData.geoCenter,id:moveData.id,type:moveData.type,size:moveData.size,rotation:0}})
    },

    rotateLeft(){
      console.log('rotateleft')
      const rotateMode=get().rotateMode
      set({rotateMode:{...rotateMode,rotation:(rotateMode.rotation+1)%4}})
    },
    rotateRight(){
      const rotateMode=get().rotateMode
      set({rotateMode:{...rotateMode,rotation:(rotateMode.rotation-1)%4}})
    },
    updateMap(newMap){
      set({ maps:{map:newMap,mapMaterial:materialGenerator(newMap)} })
    },
    exitMoveMode(){
      set({moveMode:{isActive:false}})
    },
    addBuilding({Pivot,id,type,completed,geoCenter,size,rotation})
    {
      const placedBuildings=get().placedBuildings
      set({rotateMode:{isActive:false}})

      set({
          placedBuildings:[...placedBuildings,{
            Pivot:Pivot,
            buildId:id,
            type:type,
            level:0,
            timeCreated:new Date().getTime(),
            lastCollect:null,
            Roi:10, 
            chanceBreak:30,
            buildTime:10,
            completed:completed,
            rotation:rotation,
            geoCenter:geoCenter,
            size:size

          }]
        }
      )
    },
  //{ x: 3, y: 1, buildId: 1, model: 0, level: 0, completed: 1,rotation:0, timeCreated: null, lastCollect: null, ROI: 10, chanceBreak: 10, }



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

/*

    enterAddMode({ Id }) {
      const owned = get().ownedBuildings
      const buildData = owned[owned.findIndex((building, index) => building.Id === Id)]
      const modelData = models[models.findIndex(model => model.type === buildData.type)]

      set({addMode:{size:modelData.size}})
      set({hoverData:{...get().hoverData,isCapturing:true,size:modelData.size}})
    }, 
    enterRotateMode(){
      const addMode=get().addMode
      const hoverData=get().hoverData

      set({addMode:{...addMode,isPlaced:true,Pivot:hoverData.Pivot,geoCenter:hoverData.geoCenter}})
      set({hoverData: {isCapturing: false, tile: { x: 0, z: 0 }, Pivot: { x: 0, z: 0 }, geoCenter: { x: 0, z: 0 },size:{width:1,height:1}}})
    }, 
    */



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