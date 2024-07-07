/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

function calculateBottles(numBottles,numExchange,total){
    const extra=Math.floor(numBottles/numExchange)
    if(extra<1){
        return total+numBottles
    }
    const couldBeDrank=numExchange*extra
    total+=couldBeDrank
    return calculateBottles(numBottles-couldBeDrank+extra,numExchange,total)
}

var numWaterBottles = function(numBottles, numExchange) {
    return calculateBottles(numBottles,numExchange, 0)
};