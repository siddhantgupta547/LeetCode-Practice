/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedArray=arr.toSorted((a,b)=>a-b)
    let map= new Map()
    let rank=1
    for(let i=0;i<sortedArray.length;i++){
        if(map.has(sortedArray[i])){
            continue
        }else{
            map.set(sortedArray[i],rank)
            rank++
        }
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=map.get(arr[i])
    }
    return arr
};