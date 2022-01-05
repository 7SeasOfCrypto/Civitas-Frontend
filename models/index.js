import Castle from './Castle'
import Castle0 from './Castle0'
import Castle1 from './Castle1'
import Archery from './Archery'
import Archery0 from './Archery0'
import Archery1 from './Archery1'
export const models=[
    {
        id:0,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model:Castle,colored:true},
        build:{model:[Castle0,Castle1], colored:false},
        buildTime:[10,180,0],
        stage:0,
        rotation:0,
        
    },
    {
        id:1,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model:Archery,colored:true},
        build:{model:[Archery0,Archery1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    }
        
    ]