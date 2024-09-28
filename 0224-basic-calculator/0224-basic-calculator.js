/**
 * @param {string} s
 * @return {number}
 */

function calcRecursive(s){
    let number=0
    let result=0
    let i=0
    let sign=1
    while(i<s.length){
        if(s[i]==='('){
            const{retResult,j}=calcRecursive(s.substring(i+1))
            result+=(retResult*sign)
            i+=2
            i+=j
        }else if(s[i]===')'){
            result+=(number*sign)
            return {retResult:result,j:i}
        }else if(s[i]==='+'){
            result+=(number*sign)
            number=0
            sign=+1
            i++
        }else if(s[i]==='-'){
            if(number===0){
                result+=0
            }else{
                result+=(number*sign)
            }
            number=0
            sign=-1
            i++
        }else if(s[i]===' '){
            i++
        }else{
            number=number*10+Number(s[i])
            i++
        }
    }
    return result+=(number*sign)
}

var calculate = function(s) {
    return calcRecursive(s)
};