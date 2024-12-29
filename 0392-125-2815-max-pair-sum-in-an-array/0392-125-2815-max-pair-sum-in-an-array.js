/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let map=new Map()
    let greatest=-1
    for(let i=0;i<nums.length;i++){
        let x=nums[i]
        let max=0
        while(x>0){
            const rem=x%10
            if(max<rem){
                max=rem
            }
            x=Math.floor(x/10)
        }
        if(map.has(max)){
            const current=map.get(max)
            const currentMax=current+nums[i]
            if(currentMax>greatest){
                greatest=currentMax
            }
            const currentGreatest=current>nums[i]?current:nums[i]
            map.set(max,currentGreatest)
        }else{
            map.set(max,nums[i])
        }
    }
    return greatest
};