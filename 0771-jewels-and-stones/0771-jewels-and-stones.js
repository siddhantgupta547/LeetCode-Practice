/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const stonesCount={}
    let jewelsInStones=0;
    for(let i=0;i<stones.length;i++){
        if(stones[i] in stonesCount){
            stonesCount[stones[i]]+=1
        }
        else{
            stonesCount[stones[i]]=1;
        }
    }
    for(let i=0;i<jewels.length;i++){
        if(jewels[i] in stonesCount){
            jewelsInStones+=stonesCount[jewels[i]]
        }
    }
    return jewelsInStones
};