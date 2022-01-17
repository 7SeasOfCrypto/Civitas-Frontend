import create from 'zustand'

const cursorType={pointer:{cursorId:0},pointer:{cursorId:1},notAllowed:{cursorId:2}}

const [useStoreUI ]= create((set,get) => ({
  cursorPos:{x:0,y:0},
  cursorType:'Pointer',
  modal:{isOpen:false},
  actions:{
    openModal(BuildId){
      set({modal:{isOpen:true,BuildId}})
    },
    closeModal(){
      set({modal:{isOpen:false}})
    },

      cursorMove(event){
        set({cursorPos:{x:event.x,y:event.y}})
      },
      cursorChange(cursor){
        
        set({cursorType:cursor})
      }

  }

}))




export {useStoreUI}
