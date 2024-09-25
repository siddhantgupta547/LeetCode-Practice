/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        if(Math.abs(stack[stack.length-1]?.charCodeAt(0)-s.charCodeAt(i))===32){
           stack.pop()
         }else{
             stack.push(s[i])
         }
    }
    let result=""
    if(stack.length>0){
        stack.forEach(item=>result+=item)
    }
    return result
};