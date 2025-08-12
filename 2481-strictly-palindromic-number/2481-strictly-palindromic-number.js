/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    function checkPalindrome(item){
        let i=0
        let j=item.length-1
        while(i<j){
            if(item[i]!==item[j]){
                return false
            }
            i++
            j--
        }
        return true
    }
    for(let i=2;i<=n-2;i++){
        if(!checkPalindrome(n.toString(i))){
            return false
        }
    }
    return true
};