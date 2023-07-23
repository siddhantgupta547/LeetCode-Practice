/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}, value=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] in obj)  obj[nums[i]]+=1;
        else    obj[nums[i]]=1;
    }
    // const count=Object.values(obj);
    // const values=Object.keys(obj)
    // count.forEach((Item,index)=>{
    //     if(Item>nums.length/2) value= values[index];
    // })
    for(let key in obj){
        if(obj[key]>nums.length/2)  value=key;
    }
    
    return value;
};