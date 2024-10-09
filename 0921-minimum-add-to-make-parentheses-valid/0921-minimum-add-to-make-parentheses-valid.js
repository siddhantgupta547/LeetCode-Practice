/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    if(s==='')  return true
    const stack=[]
    let top=-1
    for(let i=0;i<s.length;i++){
        if(top===-1){
            stack.push(s[i])
            top++
            continue
        }
        if(stack[top]==='(' && s[i]===')'){
            stack.pop()
            top--
        }else{
            stack.push(s[i])
            top++
        }
    }
    return stack.length
};