/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length!==arr.length){
        return false
    }
    let map={}
    target.forEach(item=>{
        if(item in map){
            map[item]+=1
        }else{
            map[item]=1
        }
    })
    for(let i=0;i<arr.length;i++){
        const item=arr[i]
        if(item in map && map[item]>0){
            map[item]-=1
        }else{
            return false
        }
    }
    return true
};