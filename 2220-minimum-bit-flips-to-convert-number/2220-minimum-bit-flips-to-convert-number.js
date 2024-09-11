/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
function convertDecimalToBinaryAndCountZerosAndOnes(number){
    if(number===1){
       return { binaryString:'1'}
    }
    else if(number===0){
       return { binaryString:'0'}
    }
    const {countOnes,countZeroes,binaryString}=convertDecimalToBinaryAndCountZerosAndOnes(Math.floor(number/2)) 
    if(number%2===0){
        return {binaryString:binaryString+0}
    }else{
        return {binaryString:binaryString+1}
    }
}
var minBitFlips = function(start, goal) {
    let {binaryString:binaryStringStart}=convertDecimalToBinaryAndCountZerosAndOnes(start)
    let {binaryString:binaryStringEnd}=convertDecimalToBinaryAndCountZerosAndOnes(goal)
    const startLength=binaryStringStart.length
    const endLength=binaryStringEnd.length
    if(startLength>endLength){
        for(let i=0;i<startLength-endLength;i++){
            binaryStringEnd=0+binaryStringEnd
        }
    }else if(startLength<endLength){
        for(let i=0;i<endLength-startLength;i++){
            binaryStringStart=0+binaryStringStart
        }
    }
    let i=0
    let j=0
    let count=0;
    while(i<binaryStringStart.length){
        if(binaryStringStart[i]!==binaryStringEnd[i]){
            count++
        }
        i++
    }
    return count;
};