import create from 'zustand'

const cursorType={pointer:{cursorId:0},pointer:{cursorId:1},notAllowed:{cursorId:2}}

const [useStoreUI ]= create((set,get) => ({
  cursorPos:{x:0,y:0},
  cursorType:'Pointer',
  actions:{
      cursorMove(event){
        set({cursorPos:{x:event.x,y:event.y}})
      },
      cursorChange(cursor){
        console.log(cursor)
        set({cursorType:cursor})
      }

  }

}))




export {useStoreUI}
