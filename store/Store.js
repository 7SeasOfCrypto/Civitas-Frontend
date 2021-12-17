import create from 'zustand'
export const useStore = create(set => ({
  listBuild:[
    {x:0,y:0,Id:1,id_model:1,level:0,completed:true},
    {x:4,y:3,Id:2,id_model:1,level:0,completed:true},
    {x:0,y:3,Id:3,id_model:1,level:0,completed:true},
    
  ],
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

