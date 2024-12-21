/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        const map=new Map()
    nums.forEach(item=>{
        if(map.has(item)){
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
    })
    let result=[]
    map.forEach((value,key)=>{
        result.push([key,value])
    })
    result.sort((a,b)=>b[1]-a[1])
    result.length=k
    result.forEach((item,index)=>{
        result[index]=item[0]
    })
    return result
};