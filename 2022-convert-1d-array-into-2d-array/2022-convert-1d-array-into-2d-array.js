/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    // const resultantArray=[]
    // let curr=0
    // for(let row=0;row<m;row++){
    //     resultantArray[row]=[]
    //     for(let col=0;col<n;col++){
    //         resultantArray[row][col]=original[curr]
    //         curr++
    //     }
    // }
    // return resultantArray
    
    let i=0;
    let j=0;
    let curr=0
    const multiArray=[]
    if(m*n<original.length || m*n>original.length)
        return []
    while(curr<original.length){
        if(j===n){
            j=0
            i++;
        }else{
            if(!multiArray[i])
                multiArray[i]=[]
            multiArray[i][j]=original[curr]
            j++
            curr++
        }
    }
    return multiArray
};