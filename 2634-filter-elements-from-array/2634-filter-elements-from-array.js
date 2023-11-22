/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.reduce((acc,curr,index)=>{
        if(fn(curr,index)){
            acc.push(curr);
        }
        return acc;
    },[]);
};