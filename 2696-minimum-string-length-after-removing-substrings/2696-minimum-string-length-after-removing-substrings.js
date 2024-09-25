/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack=[]
    let length=0
    for(let i=0;i<s.length;i++){
        const combination=stack[length-1]+s[i]
        if(combination==="AB"||combination==="CD"){
            stack.pop()
            length--
        }else{
            length++
            stack.push(s[i])
        }
    }
    return length
};