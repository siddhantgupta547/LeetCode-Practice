/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Approach 1
/*
var intersect = function(nums1, nums2) {
    const valueMap= new Map()
    const intersectionArray=[]
    for(let i=0;i<nums1.length;i++){
        if(valueMap.has(nums1[i])){
            const currentValue=valueMap.get(nums1[i])
            valueMap.set(nums1[i],currentValue+1)
        }
        else{
            valueMap.set(nums1[i],1)
        }
    }
    for(let i=0;i<nums2.length;i++){
        if(valueMap.has(nums2[i]) && valueMap.get(nums2[i])>0){
            intersectionArray.push(nums2[i])
            const currentValue=valueMap.get(nums2[i])
            valueMap.set(nums2[i],currentValue-1)
        }
    }
    return intersectionArray
};
*/
var intersect = function(nums1, nums2) {
    const sorted1= nums1.sort((a,b)=>a-b)
    const sorted2= nums2.sort((a,b)=>a-b)
    const intersectionArray=[]
    let i=0; let j=0;
    while(i<sorted1.length && j<sorted2.length){
        if(sorted1[i]===sorted2[j]){
            intersectionArray.push(sorted1[i])
            i++;
            j++;
        }
        else if(sorted1[i]>sorted2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    return intersectionArray
};