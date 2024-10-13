/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length===0){
        return []
    }
    const output=[]
    let isRange=false
    let i=0
    let j=i+1
    while(i<j && j<nums.length){
        if(nums[j-1]+1===nums[j]){
            isRange=true
            j++
        }else{
            let range=`${nums[i]}`
            if(isRange){
                range+=`->${nums[j-1]}`
            }
            output.push(range)
            i=j
            j++
            isRange=false
        }
    }
    let range=`${nums[i]}`
    if(isRange){
        range+=`->${nums[j-1]}`
    }
    output.push(range)
    return output
}