/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i=0
    let j=0
    let count=0
    while(count!==k){
        const arrItem=arr[i]
        const expected=j+1
        if(arrItem!==expected){
            j++
            count++
        }else{
            i++
            j++
        }
    }
    return j
};