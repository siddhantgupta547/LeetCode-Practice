/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i=0;
    let sum=0;
    let maxLength=0;
    while(i<nums.length && target>sum){
        sum+=nums[i];
        i++;
    }
    if(target<=sum){
        maxLength=i;
    }
    let k=i;
    i=0;
    while(k<=nums.length && i<k){
        sum-=nums[i];
        i++;
        if(sum>=target && k-i<maxLength && k-i!=0){
            maxLength=k-i;
        }
        else{
            sum+=nums[k];
            k++;
        }
    }
    return maxLength;
};