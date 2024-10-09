/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    if(s==='')  return true
    const stack=[]
    let count=0
    let top=-1
    for(let i=0;i<s.length;i++){
        if(s[i]===']'){
            count++
        }
        if(top===-1){
            stack.push(s[i])
            top++
            continue
        }
        if(stack[top]==='[' && s[i]===']'){
            stack.pop()
            count--;
            top--
        }else{
            stack.push(s[i])
            top++
        }
    }
    return Math.floor((count+1)/2)
};