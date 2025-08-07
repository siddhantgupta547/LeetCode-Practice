/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set=new Set()
    let result= n
    while(!set.has(result)){
        set.add(result)
        let curr=result
        result=0
        while(curr>0){
            result+=Math.pow(curr%10,2)
            curr=Math.floor(curr/10)
        }
        if(result===1){
            return true
        }
    }
    return false
};