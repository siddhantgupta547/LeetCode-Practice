/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    const n=nums.length
    if(n<4){
        return 0;
    }
    const sortedNums= nums.sort((a,b)=>a-b)
    let minimum=sortedNums[n-4]-sortedNums[0];
    if(minimum>sortedNums[n-1]-sortedNums[3]){
        minimum=sortedNums[n-1]-sortedNums[3]
    }
    if(minimum>sortedNums[n-3]-sortedNums[1]){
        minimum=sortedNums[n-3]-sortedNums[1]
    }
    if(minimum>sortedNums[n-2]-sortedNums[2]){
        minimum=sortedNums[n-2]-sortedNums[2]
    }
    return minimum
};