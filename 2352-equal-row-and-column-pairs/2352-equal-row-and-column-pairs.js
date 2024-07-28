/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let result=0
    //brute force
    // for(let row=0;row<grid[0].length;row++){
    //     for(let col=0;col<grid[0].length;col++){
    //         let isEqual=true
    //         for(let elem=0;elem<grid[0].length;elem++){
    //             if(grid[elem][col]!==grid[row][elem]){
    //                 isEqual=false
    //                 break;
    //             }
    //         }
    //         if(isEqual){
    //             result++;
    //         }
    //     }
    // }
    
    //HashMap
    const map= new Map()
    for(let row=0;row<grid[0].length;row++){
        let toBeStored=''
        for(let col=0;col<grid[0].length;col++){
            toBeStored+=grid[row][col]+','
        }
        if(map.has(toBeStored)){
            map.set(toBeStored, (map.get(toBeStored)+1))
        }else{
            map.set(toBeStored,1)
        }
    }
    for(let col=0;col<grid[0].length;col++){
        let toBeStored=''
        for(let row=0;row<grid[0].length;row++){
            toBeStored+=grid[row][col]+','
        }
        if(map.has(toBeStored)){
            result+=map.get(toBeStored)
        }
    }
    return result
};