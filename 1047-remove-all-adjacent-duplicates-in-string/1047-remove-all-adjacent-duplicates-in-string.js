/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack=[]
    let top=-1
    for(let i=0;i<s.length;i++){
        if(top===-1){
            stack.push(s[i])
            top++
        }
        else if(stack[top]===s[i]){
            stack.pop()
            top--
        }else{
            stack.push(s[i])
            top++
        }
    }
    return stack.join('')
};