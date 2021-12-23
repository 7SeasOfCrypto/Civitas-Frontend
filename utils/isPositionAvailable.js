import {useStore} from 'store'
import { GRID_COL,GRID_ROW } from "constants";

const isPositionAvailable = () => {
    const grid = new Array(GRID_ROW).fill(0).map(() => new Array(GRID_COL).fill(0))
    const {listBuild} = useStore()
    listBuild.map((element) => {
        grid[element.x][element.y] = 1
    })
    /* Añadir Cuando recorra el array de paths!!!! */
    return grid
}

export default isPositionAvailable