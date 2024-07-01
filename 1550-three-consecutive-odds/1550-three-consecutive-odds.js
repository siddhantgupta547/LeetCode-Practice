/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let i=0;
    let j=i+2;
    while(i<arr.length && j<arr.length){
        if(arr[i]%2!==0 && arr[j]%2!==0){
            if(arr[i+1]%2!==0)
                return true
            else{
                i+=2;
                j=i+2
            }
        }else if(arr[j]%2!==0){
            i+=2;
                j=i+2
        }else{
            i+=3
            j=i+2
        }
    }
    return false;
};