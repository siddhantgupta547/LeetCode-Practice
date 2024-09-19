/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sortedString = nums.sort((a,b)=>{
        const stringA=`${a}`
        const stringB=`${b}`
        if(stringA+stringB>stringB+stringA){
            return -1
        }else if(stringA+stringB<stringB+stringA){
            return 1
        }else{
            return 0
        }
    }).join('')
    if(Number(sortedString)===0){
        return '0'
    }
    return sortedString
};