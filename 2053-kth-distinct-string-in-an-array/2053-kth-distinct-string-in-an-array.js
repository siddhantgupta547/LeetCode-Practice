/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const map= new Map()
    let output=''
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    let count=0
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])===1){
            count++
        }
        if(count===k){
            return arr[i]
        }
    }
    return ''
};