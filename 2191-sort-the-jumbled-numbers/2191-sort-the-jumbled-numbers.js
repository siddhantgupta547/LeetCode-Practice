/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const memoize=new Map()
    const resultantArray=[]
    for(let i=0;i<nums.length;i++){
        let number= nums[i]
        let newValue=''
        if(number===0){
            const currentValue=mapping[number]
            resultantArray.push([currentValue,number])
        }else{
        while(number>0){
            const value=number%10
            if(memoize.has(number)){
                
            }
            else{
                const currentValue=mapping[value]
                newValue+=currentValue
                //Map.set(number)
            }
            number=Math.floor(number/10)
        }    
        const mappedValue=[Number(newValue.split("").reverse().join("")),nums[i]]
        resultantArray.push(mappedValue)
    }
    }
    resultantArray.sort((a,b)=>a[0]-b[0])
    for(let i=0;i<nums.length;i++){
        nums[i]=resultantArray[i][1]
    }
    console.debug(resultantArray)
    return nums
}