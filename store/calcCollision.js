export const calcCollision=(map,pivot,size) => {
    

        const bottom = size.width % 2 === 0 ? (pivot.x - (size.width) / 2) : (pivot.x - (size.width - 1) / 2)
        const left = size.height % 2 === 0 ? (pivot.z - (size.height - 2) / 2) : (pivot.z - (size.height - 1) / 2)
        const collisionArray = new Array(size.width).fill().map((value, index) => new Array(size.height).fill(false))
        let isCollision = false
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(isCollision||map[bottom + i][j + left] !==0)
                {
                    isCollision = true
                    
                }
                collisionArray[i][j]=map[bottom + i][j + left]!==0
            }
        }
        return {collisionArray,isCollision}
    


}