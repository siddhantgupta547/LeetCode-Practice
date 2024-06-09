/**
 * @param {number} n
 * @return {boolean}
 */

function checkIsEqual(n,currentValue){
    if(currentValue>n){
        return false
    }
    if(currentValue===n){
        return true
    }
    return checkIsEqual(n,currentValue*2)
}

var isPowerOfTwo = function(n) {
     if(n===0){
        return false
    }
    return checkIsEqual(n,1)
};