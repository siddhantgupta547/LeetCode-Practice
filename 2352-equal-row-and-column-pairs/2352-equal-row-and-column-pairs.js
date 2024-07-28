/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let result=0
    for(let row=0;row<grid[0].length;row++){
        for(let col=0;col<grid[0].length;col++){
            let isEqual=true
            for(let elem=0;elem<grid[0].length;elem++){
                if(grid[elem][col]!==grid[row][elem]){
                    isEqual=false
                    break;
                }
            }
            if(isEqual){
                result++;
            }
        }
    }
    return result
};