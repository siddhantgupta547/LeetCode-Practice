/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0;
    let contains=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++
        }else{
            count=0
        }
        if(count===3){
            contains=true;
            break;
        }
    }
    return contains
};