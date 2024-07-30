/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const stack=[]
    let output=0
    for(let i=0;i<s.length;i++){
        if(stack.length && stack[stack.length-1]==='b' && s.charAt(i)==='a'){
            stack.pop()
            output++
        }else{
            stack.push(s.charAt(i))
        }
    }
    return output
};