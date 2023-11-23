/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
function checkAp(nums){
    let j;
    nums.sort((a,b)=>a-b);
    let diff=nums[1]-nums[0];
    for(let i=1;i<nums.length-1;i+=1){
        j=i+1;
        if(nums[j]-nums[i]!==diff)   return false;
    }
    return true;
}

var checkArithmeticSubarrays = function(nums, l, r) {
    let numsSubarray=[];
    let apArray=[];
    for(let i=0;i<l.length;i+=1){
        if(r[i]===undefined)
            numsSubarray = nums.slice(l[i],r[l.length]);
        else
            numsSubarray = nums.slice(l[i],r[i]+1);
        apArray.push(checkAp(numsSubarray));
    }
    return apArray;
};