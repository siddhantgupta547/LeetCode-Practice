/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const frequencyCounter={};
    let pairCount=0;
    nums.forEach(num=>{
        if(num in frequencyCounter){
            frequencyCounter[num]+=1
        }
        else{
            frequencyCounter[num]=1;
        }
    })
    const values=Object.values(frequencyCounter);
    values.forEach(value=>{
        if(value!==1){
            const n=value-1;
            pairCount+=n*(n+1)/2;
        }
    })
    return pairCount;
};