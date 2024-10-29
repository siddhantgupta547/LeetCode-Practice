/**
 * @param {number[]} nums
 * @return {number}
 */

function getSequenceLength(map,value){
    const added=[value]
    let i=0
    while(true){
        let square=added[i]*added[i]
        if(map.has(square)){
            added.push(square)
            //sqLengthSet.add(square)
            let val=map.get(square)
            val--
            if(val===0){
                map.delete(square)
            }else{
                map.set(square,val)
            }
        }else{
            break
        }
        i++
    }
    return added.length
}
var longestSquareStreak = function(nums) {
    nums.sort((a,b)=>a-b)
    const map=new Map()
    for(let item of nums){
        if(map.has(item)){
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
    }
    let length=-1
    for(let item of nums){
        const sq=Math.sqrt(item)
        if(map.has(sq)){
            let val=map.get(sq)
            val--
            if(val===0){
                map.delete(sq)
            }else{
                map.set(sq,val)
            }
            const sqL=getSequenceLength(map,sq)
            if(sqL>1 && sqL>length){
                length=sqL
            }
        }
    }
    return length
};