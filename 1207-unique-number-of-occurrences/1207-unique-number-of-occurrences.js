/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
     let count={};
    for(let item of arr){
        count.hasOwnProperty(item)?count[item]+=1:count[item]=1;
    }
    let countArr=Object.values(count);
    //console.log(count,countArr);
    count={};
    for(let item of countArr){
        if(count.hasOwnProperty(item))  return false;
        count[item]=1;
    }
    return true;
};