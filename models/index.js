import Castle from './Castle'
import Castle0 from './Castle0'
import Castle1 from './Castle1'
import Archery from './Archery'
import Archery0 from './Archery0'
import Archery1 from './Archery1'
import Barracks from './Barracks'
import Barracks0 from './Barracks0'
import Barracks1 from './Barracks1'
import BlackSmith from './Blacksmith'
import BlackSmith0 from './Blacksmith0'
import BlackSmith1 from './Blacksmith1'
import Farm from './Farm'
import Farm0 from './Farm0'
import Farm1 from './Farm1'
import Granary from './Granary'
import Granary0 from './Granary0'
import Granary1 from './Granary1'
import House from './House'
import House0 from './House0'
import House1 from './House1'
import Keep from './Keep'
import Keep0 from './Keep0'
import Keep1 from './Keep1'
import Library from './Library'
import Library0 from './Library0'
import Library1 from './Library1'
import LumberMill from './LumberMill'
import LumberMill0 from './LumberMill0'
import LumberMill1 from './LumberMill1'
import MageTower from './MageTower'
import MageTower0 from './MageTower0'
import MageTower1 from './MageTower1'
import Market from './Market'
import Market0 from './Market0'
import Market1 from './Market1'
import Stables from './Stables'
import Stables0 from './Stables0'
import Stables1 from './Stables1'
import Temple from './Temple'
import Temple0 from './Temple0'
import Temple1 from './Temple1'
import Workshop from './Workshop'
import Workshop0 from './Workshop0'
import Workshop1 from './Workshop1'


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
    },
    {
        id:2,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model:Barracks,colored:true},
        build:{model:[Barracks0,Barracks1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },{
        id:3,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: BlackSmith,colored:true},
        build:{model:[ BlackSmith0, BlackSmith1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:4,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Farm,colored:true},
        build:{model:[ Farm0, Farm1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:5,
        maxlevel:2,
        size:{width:2,height:2},
        complete:{model: Granary,colored:true},
        build:{model:[ Granary0, Granary1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:6,
        maxlevel:2,
        size:{width:2,height:2},
        complete:{model: House,colored:true},
        build:{model:[ House0, House1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:7,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Keep,colored:true},
        build:{model:[ Keep0, Keep1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:8,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Library,colored:true},
        build:{model:[ Library0, Library1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:9,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: LumberMill,colored:true},
        build:{model:[ LumberMill0, LumberMill1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:10,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: MageTower,colored:true},
        build:{model:[ MageTower0, MageTower1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:11,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Market,colored:true},
        build:{model:[ Market0, Market1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:12,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Stables,colored:true},
        build:{model:[ Stables0, Stables1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:13,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Temple,colored:true},
        build:{model:[ Temple0, Temple1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    },
    {
        id:14,
        maxlevel:2,
        size:{width:3,height:3},
        complete:{model: Workshop,colored:true},
        build:{model:[ Workshop0, Workshop1], colored:false},
        buildTime:[10,180,0],
        rotation:0,
    }
    ]
