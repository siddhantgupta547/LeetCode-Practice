/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const set=new Set()
    for(let i=0;i<arr.length;i++){
        const double=arr[i]*2
        const half=arr[i]/2
        if(set.has(double)||set.has(half)){
            return true
        }else{
            set.add(arr[i])
        }
    }
    return false
};