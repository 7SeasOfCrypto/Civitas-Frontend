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


const isPositionAvailable = (array,builds) => {
    let tempArray = [...array]
    builds.map((build,i) => {
        let x = build.x;
        let y = build.y;

        for(let j = x; j < build.row + x; j++){
            for(let k = y; k < build.col + y; k++){
                tempArray[j][k] = 1;
            }
        }
    })

    return tempArray
}
/*const isPositionAvailable = (array,builds) => {
    let tempArray = [...array]
    const positions = builds.map((build,i) => {
        let x = build.x;
        let y = build.y;
        for(let j = x; j < build.row + x; j++){
            for(let k = y; k < build.col + y; k++){
                tempArray[j][k] = 1;
            }
        }
    })

    return tempArray
}*/



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
const drawPoint=(array,point,material)=>{
    let tempArray=[...array]
    tempArray[point.x][point.y]=material
    return tempArray


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
 
   //=============
    //Ground IDs:
    //0 (Null):    None - grey - A0A0A0
    //1:    Edificable, movible, null. Color: Blue - 006CFF
    //2:    No Edificable, movible, null. Color: Red - FF0000
    //3:    No edificable, movible, genera camino. Color: Green - 2AFF00
    //4:    No edificable, movible, lleva al castillo??. Color: Light Blue - 00FFCD
    //5:    No edificable, no movible, llama a un menú. Color: Pink - FF00E8
    //6:    No edificable, no movible, decoraciones (fijas o modificables?). Color: Yellow - FFC100
    //7:    No edificable, movible, Línea de corte izquierda-derecha (No permite contruir más a la derecha) Color: Purple - A200FF

    //Drawing:
    //===Toolbox
    //maproad=drawRect(map,{x:0,y:0},{x:7,y:7},1)
    //maproad=drawLine(maproad,{x:1,y:1},{x:1,y:10},2)
    
    //1
    let maproad=drawRect(map,{x:0,y:0},{x:49,y:49},1)         

    //2
    maproad=drawRect(maproad,{x:5,y:0},{x:8,y:44},2)    //Línea horizontal inferior
    maproad=drawRect(maproad,{x:3,y:1},{x:10,y:3},2)    //Línea horizontal inferior Ala izq - 1
    maproad=drawLine(maproad,{x:2,y:2},{x:11,y:2},2)    //Línea horizontal inferior Ala izq - 2
    maproad=drawRect(maproad,{x:4,y:3},{x:9,y:5},2)     //Línea horizontal inferior Ala izq - der
    maproad=drawRect(maproad,{x:28,y:14},{x:30,y:44},2) //Línea horizontal media
    maproad=drawLine(maproad,{x:31,y:14},{x:31,y:28},2) //Línea horizontal media línea
    maproad=drawRect(maproad,{x:39,y:14},{x:41,y:28},2) //Línea horizontal superior
    maproad=drawRect(maproad,{x:9,y:5},{x:43,y:7},2)    //Línea vertical 1
    maproad=drawRect(maproad,{x:9,y:11},{x:43,y:13},2)  //Línea vertical 2
    maproad=drawRect(maproad,{x:30,y:29},{x:43,y:31},2) //Línea vertical 3
    maproad=drawRect(maproad,{x:30,y:39},{x:37,y:41},2) //Línea vertical 4
    maproad=drawRect(maproad,{x:9,y:42},{x:27,y:47},2)  //Línea vertical 5
    maproad=drawRect(maproad,{x:25,y:41},{x:27,y:41},2)  //Línea vertical 5 lateral arriba
    maproad=drawRect(maproad,{x:9,y:41},{x:11,y:41},2)  //Línea vertical 5 lateral abajo

    maproad=drawRect(maproad,{x:15,y:0},{x:21,y:4},2)   //ED izq 
    maproad=drawRect(maproad,{x:13,y:6},{x:23,y:16},2)  //Plaza Izq
    maproad=drawLine(maproad,{x:12,y:8},{x:12,y:10},2)  //Plaza Izq-abajo
    maproad=drawRect(maproad,{x:14,y:8},{x:22,y:18},2)  //Plaza Izq-der
    maproad=drawLine(maproad,{x:15,y:19},{x:21,y:19},2) //Plaza Izq-der 2
    maproad=drawRect(maproad,{x:39,y:5},{x:47,y:13},2)  //Plaza Sup Izq 
    maproad=drawLine(maproad,{x:48,y:6},{x:48,y:12},2)  //Plaza Sup Izq Línea
    maproad=drawRect(maproad,{x:38,y:30},{x:44,y:44},2) //Plaza Sup Der
    maproad=drawLine(maproad,{x:43,y:30},{x:43,y:43},2) //Plaza Sup Der Línea
    maproad=drawLine(maproad,{x:36,y:42},{x:36,y:44},2) //Plaza Sup Der Línea baja
    maproad=drawRect(maproad,{x:17,y:20},{x:19,y:32},2) //Conector plazas
    maproad=drawLine(maproad,{x:20,y:20},{x:20,y:21},2) //Conector plazas esq 1
    maproad=drawLine(maproad,{x:16,y:20},{x:16,y:21},2) //Conector plazas esq 2
    //=======
    //Conector plazas bordes
    maproad=drawLine(maproad,{x:20,y:23},{x:20,y:23},2) //Borde Arriba 1
    maproad=drawLine(maproad,{x:20,y:25},{x:20,y:25},2) //Borde Arriba 2
    maproad=drawLine(maproad,{x:20,y:27},{x:20,y:27},2) //Borde Arriba 3
    maproad=drawLine(maproad,{x:20,y:29},{x:20,y:29},2) //Borde Arriba 4
    maproad=drawLine(maproad,{x:20,y:31},{x:20,y:31},2) //Borde Arriba 5
    maproad=drawLine(maproad,{x:16,y:23},{x:16,y:23},2) //Borde Abajo 1
    maproad=drawLine(maproad,{x:16,y:25},{x:16,y:25},2) //Borde Abajo 2
    maproad=drawLine(maproad,{x:16,y:27},{x:16,y:27},2) //Borde Abajo 3
    maproad=drawLine(maproad,{x:16,y:29},{x:16,y:29},2) //Borde Abajo 4
    maproad=drawLine(maproad,{x:16,y:31},{x:16,y:31},2) //Borde Abajo 5
    //=======
    maproad=drawLine(maproad,{x:15,y:32},{x:21,y:32},2) //Plaza Derecha Borde Izq
    maproad=drawRect(maproad,{x:13,y:35},{x:23,y:37},2) //Plaza Derecha Bordes superior inferior 
    maproad=drawRect(maproad,{x:14,y:33},{x:22,y:47},2) //Plaza Derecha
    maproad=drawLine(maproad,{x:23,y:40},{x:23,y:41},2) //Plaza Derecha Conector Arriba 1
    maproad=drawLine(maproad,{x:13,y:40},{x:13,y:41},2) //Plaza Derecha Conector Arriba 2

    maproad=drawRect(maproad,{x:2,y:21},{x:4,y:29},2)   //Ed Inferior
    maproad=drawLine(maproad,{x:1,y:22},{x:1,y:28},2)   //Ed Inferior Abajo
    maproad=drawRect(maproad,{x:0,y:46},{x:49,y:49},2)  //Parte Final

    //3
    maproad=drawRect(maproad,{x:6,y:0},{x:7,y:44},3)    //Road Horizontal
    maproad=drawRect(maproad,{x:29,y:13},{x:30,y:30},3) //Road Horizontal medio
    maproad=drawLine(maproad,{x:29,y:31},{x:29,y:41},3) //Road Horizontal medio 2
    maproad=drawLine(maproad,{x:40,y:12},{x:40,y:29},3) //Road Horizontal superior
    
    maproad=drawLine(maproad,{x:18,y:4},{x:18,y:5},3)   //Ed izquierda camino
    maproad=drawLine(maproad,{x:8,y:6},{x:39,y:6},3)    //Road Vertical 1
    maproad=drawLine(maproad,{x:8,y:12},{x:39,y:12},3)  //Road Vertical 2
    maproad=drawLine(maproad,{x:30,y:30},{x:38,y:30},3) //Road Vertical 3
    maproad=drawLine(maproad,{x:30,y:40},{x:38,y:39},3) //Road Vertical 4
    maproad=drawLine(maproad,{x:37,y:41},{x:37,y:44},3) //Road Vertical 4 conector
    maproad=drawRect(maproad,{x:25,y:42},{x:29,y:44},3) //Road Vertical 5 Superior Línea 1
    maproad=drawRect(maproad,{x:23,y:43},{x:24,y:44},3) //Road Vertical 5 Superior Línea 2
    maproad=drawLine(maproad,{x:14,y:43},{x:22,y:43},3) //Road Vertical 5 Línea media
    maproad=drawRect(maproad,{x:8,y:42},{x:11,y:44},3)  //Road Vertical 5 Inferior Línea 1
    maproad=drawRect(maproad,{x:12,y:43},{x:13,y:44},3) //Road Vertical 5 Inferior Línea 2

    maproad=drawRect(maproad,{x:40,y:6},{x:43,y:12},3)  //Road plaza superior izquierda
    maproad=drawRect(maproad,{x:39,y:30},{x:43,y:40},3) //Road plaza superior derecha
    maproad=drawRect(maproad,{x:14,y:7},{x:22,y:16},3)  //Road plaza izquierda
    maproad=drawRect(maproad,{x:15,y:16},{x:21,y:18},3) //Road plaza izquierda - derecha 1
    maproad=drawLine(maproad,{x:16,y:19},{x:20,y:19},3) //Road plaza izquierda - derecha 2
    maproad=drawLine(maproad,{x:18,y:20},{x:18,y:32},3) //Road plaza izquierda conector derecha
    maproad=drawRect(maproad,{x:15,y:33},{x:21,y:38},3) //Road plaza derecha
    maproad=drawRect(maproad,{x:14,y:35},{x:22,y:37},3) //Road plaza derecha superior inferior
    maproad=drawRect(maproad,{x:16,y:39},{x:20,y:44},3) //Road plaza derecha - derecha
    
    //5
    maproad=drawRect(maproad,{x:16,y:0},{x:20,y:3},5)   //Ed Izquierda
    maproad=drawRect(maproad,{x:44,y:6},{x:47,y:12},5)  //Ed Superior Izquierdo
    maproad=drawRect(maproad,{x:2,y:22},{x:4,y:28},5)   //Ed Inferior
    maproad=drawRect(maproad,{x:39,y:41},{x:43,y:43},5) //Ed Superior Derecho

    //6
    maproad=drawLine(maproad,{x:3,y:2},{x:5,y:2},6)     //Inicio 1
    maproad=drawLine(maproad,{x:5,y:3},{x:5,y:5},6)     //Inicio 2
    maproad=drawLine(maproad,{x:8,y:2},{x:10,y:2},6)    //Inicio 3
    maproad=drawLine(maproad,{x:8,y:3},{x:8,y:5},6)     //Inicio 4
    maproad=drawRect(maproad,{x:16,y:4},{x:17,y:5},6)   //Ed izquierda Abajo
    maproad=drawRect(maproad,{x:19,y:4},{x:20,y:5},6)   //Ed izquierda Arriba
    maproad=drawRect(maproad,{x:13,y:7},{x:16,y:8},6)   //Plaza Izq Abajo 1
    maproad=drawLine(maproad,{x:13,y:9},{x:13,y:11},6)  //Plaza Izq Abajo 2
    maproad=drawRect(maproad,{x:20,y:7},{x:22,y:8},6)   //Plaza Izq Arriba
    //======
    //Plaza Izq conector derecha
    maproad=drawLine(maproad,{x:19,y:21},{x:19,y:21},6) //Arriba 1
    maproad=drawLine(maproad,{x:19,y:23},{x:19,y:23},6) //Arriba 2
    maproad=drawLine(maproad,{x:19,y:25},{x:19,y:25},6) //Arriba 3
    maproad=drawLine(maproad,{x:19,y:27},{x:19,y:27},6) //Arriba 4
    maproad=drawLine(maproad,{x:19,y:29},{x:19,y:29},6) //Arriba 5
    maproad=drawLine(maproad,{x:19,y:31},{x:19,y:31},6) //Arriba 6
    maproad=drawLine(maproad,{x:17,y:21},{x:17,y:21},6) //Abajo 1
    maproad=drawLine(maproad,{x:17,y:23},{x:17,y:23},6) //Abajo 2
    maproad=drawLine(maproad,{x:17,y:25},{x:17,y:25},6) //Abajo 3
    maproad=drawLine(maproad,{x:17,y:27},{x:17,y:27},6) //Abajo 4
    maproad=drawLine(maproad,{x:17,y:29},{x:17,y:29},6) //Abajo 5
    maproad=drawLine(maproad,{x:17,y:31},{x:17,y:31},6) //Abajo 6
    //======
    maproad=drawLine(maproad,{x:5,y:22},{x:5,y:23},6)   //Ed inferior izquierda
    maproad=drawLine(maproad,{x:5,y:27},{x:5,y:28},6)   //Ed inferior derecha
    maproad=drawLine(maproad,{x:21,y:33},{x:5,y:33},6)  //Plaza derecha arriba
    maproad=drawLine(maproad,{x:15,y:33},{x:5,y:33},6)  //Plaza derecha abajo
    maproad=drawRect(maproad,{x:21,y:40},{x:22,y:41},6) //Plaza derecha ext arriba
    maproad=drawRect(maproad,{x:14,y:40},{x:15,y:41},6) //Plaza derecha ext abajo

    maproad=drawLine(maproad,{x:28,y:42},{x:28,y:42},6) //Frente Camino Castillo Superior
    maproad=drawRect(maproad,{x:8,y:42},{x:8,y:42},6) //Frente Camino Castillo Inferior
    
    maproad=drawRect(maproad,{x:20,y:43},{x:20,y:43},6) //Camino Castillo Arriba 1
    maproad=drawRect(maproad,{x:20,y:46},{x:20,y:46},6) //Camino Castillo Arriba 2
    maproad=drawRect(maproad,{x:20,y:49},{x:20,y:49},6) //Camino Castillo Arriba 3
    maproad=drawRect(maproad,{x:16,y:43},{x:16,y:43},6) //Camino Castillo Abajo 1
    maproad=drawRect(maproad,{x:16,y:46},{x:16,y:46},6) //Camino Castillo Abajo 2
    maproad=drawRect(maproad,{x:16,y:49},{x:16,y:49},6) //Camino Castillo Abajo 3



    //7
    maproad=drawLine(maproad,{x:0,y:45},{x:49,y:45},7)  //Línea final


    //4
    maproad=drawRect(maproad,{x:17,y:44},{x:19,y:49},4) //Camino Castillo
    
    //const res = isPositionAvailable(newMap,testBuilds)

    return maproad
    
    //const res = isPositionAvailable(newMap,testBuilds)

    return maproad

}