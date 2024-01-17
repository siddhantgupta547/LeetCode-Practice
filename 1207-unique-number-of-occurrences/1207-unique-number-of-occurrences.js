/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count={};
    const freq= new Set();
    for(let item of arr){
        count.hasOwnProperty(item)?count[item]+=1:count[item]=1;
    }
    for(let key in count){
       if(freq.has(count[key]))  return false;
        freq.add(count[key])
    }
    return true;
};