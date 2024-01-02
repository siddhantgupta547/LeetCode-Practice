/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const count={}
    let max=1;
    const resultingArray=[[]];
    nums.forEach(num=>{
        if(count.hasOwnProperty(num)){
            const value=count[num]+1
            count[num]=value;
            if(resultingArray.length>=value){
                resultingArray[value-1].push(num)
            }
            else{
                resultingArray.push([])
                resultingArray[value-1].push(num)
            }
        }
        else{
            count[num]=1;
            resultingArray[0].push(num);
        }
    })
    return resultingArray
};