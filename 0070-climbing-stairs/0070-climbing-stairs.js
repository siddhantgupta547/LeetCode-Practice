/**
 * @param {number} n
 * @return {number}
 */

function countSteps(n, cache){
    let currentCount=0;
    if(n==1 || n==0)
        return 1;
    if((n-1) in cache)  currentCount+=cache[n-1]
    else{
        const result=countSteps(n-1, cache);
        cache[n-1]=result;
        currentCount+=result;
    }
    if((n-2) in cache)  currentCount+=cache[n-2]
    else{
        const result=countSteps(n-2, cache);
        cache[n-2]=result;
        currentCount+=result;
    }
    return currentCount;
}

var climbStairs = function(n) {
    const cache={}
    return countSteps(n, cache);
};