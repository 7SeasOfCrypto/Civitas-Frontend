import Castle from './Castle'
import Archery from './Archery'
import Barracks from './Barracks'
import BlackSmith from './Blacksmith'
import Farm from './Farm'
import Granary from './Granary'
import House from './House'
import Keep from './Keep'
import Library from './Library'
import LumberMill from './LumberMill'
import MageTower from './MageTower'
import Market from './Market'
import Stables from './Stables'
import Temple from './Temple'
import TownHall from './TownHall'
import Workshop from './Workshop'


export const modelsBuild = [
    {
        type: 0,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Castle,
        buildTime:10,
        stage: 0,
        rotation: 0,
        level:3,
        name:"Mansion",
    },
    {
        type: 1,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Archery,
        buildTime:10,
        rotation: 0,
        level:2,
        name:"Archery",
    },
    {
        type: 2,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Barracks,
        buildTime:10,
        rotation: 0,
        level:1,
        name:"Barracks",
    },
    {
        type: 3,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: BlackSmith,
        buildTime:10,
        rotation: 0,
        level:0,
        name:"Blacksmith",
    },
    {
        type: 4,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Farm,
        buildTime:10,
        rotation: 0,
        level:0,
        name:"Farm",
    },
    {
        type: 5,
        maxlevel: 2,
        size: { width: 2, height: 2 },
        models: Granary,
        buildTime:11,
        rotation: 0,
        level:1,
        name:"Granary",
    },
    {
        type: 6,
        maxlevel: 2,
        size: { width: 2, height: 2 },
        models: House,
        buildTime:10,
        rotation: 0,
        level:1,
        name:"House",
    },
    {
        type: 7,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Keep,
        buildTime:10,
        rotation: 0,
        level:0,
        name:"Town Center",
    },
    {
        type: 8,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Library,
        buildTime:10,
        rotation: 0,
        level:3,
        name:"Library",
    },
    {
        type: 9,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: LumberMill,
        buildTime:10,
        rotation: 0,
        level:0,
        name:"Lumbermill",
    },
    {
        type: 10,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: MageTower,
        buildTime:10,
        rotation: 0,
        level:3,
        name:"Mage Tower",
    },
    {
        type: 11,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Market,
        buildTime:10,
        rotation: 0,
        level:0,
        name:"Market",
    },
    {
        type: 12,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Stables,
        buildTime:10,
        rotation: 0,
        level:2,
        name:"Stables",
    },
    {
        type: 13,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Temple,
        buildTime:10,
        rotation: 0,
        level:3,
        name:"Temple",
    },
    {
        type: 14,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: TownHall,
        buildTime:10,
        rotation: 0,
        level:3,
        name:"TownHall",
    },
    {
        type: 15,
        maxlevel: 2,
        size: { width: 3, height: 3 },
        models: Workshop,
        buildTime:10,
        rotation: 0,
        level:2,
        name:"Workshop",
    }
]
