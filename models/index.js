import SMCastle from './SMCastle'
import Castillo from './Castillo'

export const models=[
    {
        id:0,
        maxlevel:2,
        complete:[
            {level:0,size:3,model:SMCastle,colored:true},
            {level:1,size:3,model:SMCastle,colored:true},
            {level:2,size:3,model:SMCastle,colored:true},
        ],
        build:[
            {level:0,size:3,model:SMCastle,colored:true},
            {level:1,size:3,model:SMCastle,colored:true},
            {level:2,size:3,model:SMCastle,colored:true},
        ],
    },
    {
        id:1,
        maxlevel:2,
        complete:[
            {level:0,size:10,model:Castillo,colored:true},
            {level:1,size:10,model:Castillo,colored:true},
            {level:2,size:10,model:Castillo,colored:true},
        ],
        build:[
            {level:0,size:10,model:SMCastle,colored:true},
            {level:1,size:10,model:SMCastle,colored:true},
            {level:2,size:10,model:SMCastle,colored:true},
        ],
    }
        
    ]