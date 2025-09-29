/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    // let i=0
    // let j=0
    // let count=0
    // while(count!==k){
    //     const arrItem=arr[i]
    //     const expected=j+1
    //     if(arrItem!==expected){
    //         j++
    //         count++
    //     }else{
    //         i++
    //         j++
    //     }
    // }
    // return j
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        const missingElements = arr[mid] - (mid + 1)
        if (missingElements < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left + k
};