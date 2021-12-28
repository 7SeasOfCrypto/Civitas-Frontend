import { useStore } from "@react-three/fiber" // POR EL MOMENTO OCUPO LAS POSICIONES DE ESTAS CASAS:

const drawLine =(array,origin,dest,material)=>{
    let tempArray=[...array]
    const dir={x:(dest.x-origin.x)>0?1:0,y:(dest.y-origin.y)>0?1:0}
    let point={...origin}
    const length= (dest.x-origin.x)*dir.x+(dest.y-origin.y)*dir.y
    for (let z=0 ; z<= length; z++) {
        tempArray[point.x+z*dir.x][point.y+z*dir.y]=material
    }
    return  tempArray
}
const drawRect =(array,origin,dest,material)=>{
    let tempArray=[...array]
    const width=dest.x-origin.x
    const height=dest.y-origin.y
    for (let i=0;i<=width;i++)
    {
        for (let j=0;j<=height;j++)
        {
            tempArray[origin.x+i][origin.y+j]=material
        }
    }
    return  tempArray

}
const EmptyMap=(row,col)=>{
    return new Array(row).fill().map((value,index)=> new Array(col).fill(0))
}

const testBuilds = [
    {x:0,y:0,Id:1,id_model:0,level:0,completed:true,size:3},
    {x:4,y:3,Id:2,id_model:0,level:0,completed:true,size:3},
    {x:0,y:8,Id:3,id_model:0,level:0,completed:true,size:3},
    {x:20,y:20,Id:4,id_model:1,level:0,completed:true,size:3},
]

export const mapGenerator=(row,col)=>{

    const map=EmptyMap(row,col)
 

    let maproad=drawRect(map,{x:0,y:0},{x:7,y:7},1)
    maproad=drawLine(maproad,{x:1,y:1},{x:1,y:10},2)
    maproad=drawLine(maproad,{x:2,y:2},{x:2,y:10},2)

    
    //const res = isPositionAvailable(newMap,testBuilds)

    return maproad

}