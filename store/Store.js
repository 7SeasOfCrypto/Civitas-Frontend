import create from 'zustand'
import { mapGenerator, materialGenerator } from './MapGenerator'
import { calcCollision } from './calcCollision'
import { CELL_SIZE } from 'constants'
import { modelsBuild } from '/models/'

const COLLECT_TIME= 60
const [useStore] = create((set, get) => ({
  maps: { map: [], mapMaterial: [] },
  timer: null,
  shouldUpdate: false,

  ownedBuildings: [
    { BuildId: 1, type: 0, completed: 0, isPlaced: false,name:"Castle", level:2 },
    { BuildId: 2, type: 1, completed: 0, isPlaced: false,name:"Archery", level:2 },
    { BuildId: 3, type: 2, completed: 0, isPlaced: false,name:"Barracks", level:1 },
    { BuildId: 4, type: 5, completed: 0, isPlaced: false,name:"Granary", level:1 },
    { BuildId: 5, type: 6, completed: 0, isPlaced: false,name:"House", level:1 },
    { BuildId: 6, type: 7, completed: 0, isPlaced: false,name:"Keep", level:3 },
    { BuildId: 7, type: 8, completed: 0, isPlaced: false,name:"Library", level:3 },
    { BuildId: 8, type: 10, completed: 0, isPlaced: false,name:"Mage Tower", level:3 },
    { BuildId: 9, type: 12, completed: 0, isPlaced: false,name:"Stables", level:2 },
    { BuildId: 10, type: 13, completed: 0, isPlaced: false,name:"Temple", level:3 },
    { BuildId: 11, type: 14, completed: 0, isPlaced: false,name:"Town Hall", level:2 },
    { BuildId: 12, type: 15, completed: 0, isPlaced: false,name:"Workshop", level:1 },
    
  ],
  placedBuildings: [
    /*
    {

      Pivot: { x: 1, z: 6 },
      BuildId: -11,
      type: 7,
      timeCreated: new Date().getTime(),
      Roi: 10,
      buildTime: 10,
      completed: 0,
      geoCenter: { x: 4.9999995, z: 21.666664500000003 },
      size: { width: 3, height: 3 },
      rotation: 0,
      percent: 0,
      isCollecting:false,
    }*/
  ],
  collectBuilding:[],
  isShopOpen: false,
  setShopOpen: (value) => set(() => ({ isShopOpen: value })),
  isBuildActive: false,
  setBuildState: (value) => set(() => ({ isBuildActive: value })),
  finishedBuildings: [],
  moveMode: { isActive: false },
  rotateMode: { isActive: false },
  collision: {
    collisionArray: [],
    isCollision: false

  },
  actions: {
    initMap() {
      set((state) => ({ maps: mapGenerator(50, 50) }))
      const timer = setInterval(() => get().actions.tick(), 1000)
      set({ timer: timer })
    },
    tick() {
      get().actions.checkBuilding()
      get().actions.checkCollect()

    },
    checkBuilding() {
      const collectBuilding=get().collectBuilding
      const placedBuildings = get().placedBuildings
      const buildsToAdd=[]
      const evolvedBuildList = placedBuildings.map((value, index) => {
        const { timeCreated, completed, buildTime } = value

        if (completed === 2)
        {
         if(value.isCollecting)
          return {...value,percent:101}
         else
         buildsToAdd=[...buildsToAdd,value]
          return {...value,percent:101,isCollecting:true}
        }
          const timeElapsed = (new Date().getTime() - timeCreated)
        const percent = timeElapsed < buildTime * 1000 ? (timeElapsed * 100) / (buildTime * 1000) : 100

        const evolveState = percent < 50 ? 0 : percent < 100 ? 1 : 2

        return { ...value, completed: evolveState, percent: percent }
      })
      if(buildsToAdd.length>0)
      {
        const AddBuilds=buildsToAdd.map((newCollect, index) =>{
          const {BuildId,Roi} = newCollect
          return {BuildId,Roi,dateStart:new Date().getTime(),lastCollect:new Date().getTime(),timeToCollect:0,percentCollect:0 }
        })
        set({collectBuilding:[...collectBuilding, ...AddBuilds]})
      }

        set({ placedBuildings: evolvedBuildList })
    },
    checkCollect() {
      const collectList= get().collectBuilding
      const updateCollect=collectList.map((build,index)=>{
        const newTimeToCollect=(COLLECT_TIME+build.lastCollect/1000-   new Date().getTime()/1000)
        const newPercentCollect= 100-newTimeToCollect/COLLECT_TIME*100
        
        return {...build,timeToCollect:newTimeToCollect,percentCollect:newPercentCollect>100?100:newPercentCollect}
      })
      set ({collectBuilding:updateCollect})
    
    },

    setHoverTile({ tile }) {
      const moveData = get().moveMode
      const map = get().maps.map
      if (tile.x !== moveData.tile.x || tile.z !== moveData.tile.z) {
        const { size } = moveData
        const drawData = calcDrawData({ tile, size })
        set({ moveMode: { ...moveData, tile: { x: tile.x, z: tile.z }, ...drawData } })
        set({ collision: calcCollision(map, drawData.Pivot, size) })
      }
    },

    enterMove({ BuildId }) {

      const owned = get().ownedBuildings
      const buildData = owned.find((building, index) => building.BuildId === BuildId)

      set({ rotateMode: { isActive: false } })
      const modelData = modelsBuild.find(model => model.type === buildData.type)

      set({ moveMode: { isActive: true, tile: { x: 0, z: 0 }, Pivot: { x: 1, z: 1 }, geoCenter: { x: modelData.size.width === 2 ? CELL_SIZE : CELL_SIZE * 1.5, z: modelData.size.height === 2 ? CELL_SIZE : CELL_SIZE * 1.5 }, BuildId: BuildId, type: buildData.type, size: modelData.size } })

    },
    enterRotate() {
      const moveData = get().moveMode
      set({ moveMode: { isActive: false,tile:{x:0,z:0} } })
      set({ rotateMode: { isActive: true, Pivot: moveData.Pivot, geoCenter: moveData.geoCenter, BuildId: moveData.BuildId, type: moveData.type, size: moveData.size, rotation: 0 } })
    },

    rotateLeft() {

      const rotateMode = get().rotateMode
      set({ rotateMode: { ...rotateMode, rotation: (rotateMode.rotation + 1) % 4 } })
    },
    rotateRight() {
      const rotateMode = get().rotateMode
      set({ rotateMode: { ...rotateMode, rotation: (rotateMode.rotation - 1) % 4 } })
    },
    updateMap(newMap) {
      set({ maps: { map: newMap, mapMaterial: materialGenerator(newMap) } })
    },
    exitMoveMode() {
      set({ moveMode: { isActive: false } })
    },
    exitRotateMode() {
      set({ rotateMode: { isActive: false } })
    },

    addBuilding({ Pivot, BuildId, type, completed, geoCenter, size, rotation }) {
      const placedBuildings = get().placedBuildings
      setTimeout(() => get().actions.tick(), 1000)

      set({ rotateMode: { isActive: false } })

      set({
        placedBuildings: [...placedBuildings, {
          Pivot: Pivot,
          BuildId: BuildId,
          type: type,
          level: 0,
          timeCreated: new Date().getTime(),
          lastCollect: null,
          Roi: 10,
          chanceBreak: 30,
          buildTime: 10,
          completed: completed,
          rotation: rotation,
          geoCenter: geoCenter,
          size: size

        }]
      }
      )
      const newOwned = get().ownedBuildings.map((value) => value.BuildId !== BuildId ? value : { ...value, isPlaced: true })
      
      set({ ownedBuildings: newOwned })
    },
    



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
