/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let sorted=true
    let binaryMap=new Map()
    nums.sort((a,b)=>{
        if(a<b){
            let binaryA
            let binaryB
            if(binaryMap.has(a)){
                binaryA=binaryMap.get(a)
            }else{
                binaryA =a.toString(2).split('').filter(i=>i==='1').length
                binaryMap.set(a,binaryA)
            }

            if(binaryMap.has(b)){
                binaryB=binaryMap.get(b)
            }else{
                binaryB =b.toString(2).split('').filter(i=>i==='1').length
                binaryMap.set(b,binaryB)
            }

            if(binaryA!==binaryB){
                sorted = false
            }
            return a-b
        }
    })
    
    return sorted
};