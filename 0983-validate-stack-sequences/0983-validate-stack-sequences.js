/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let i=0;
    let j=0;
    const stack=[]
    let top=-1
    let same=false
    while(i<=pushed.length && j<popped.length && !same){
        if(top===-1 && i!==pushed.length){
            stack.push(pushed[i])
            i++
            top++
            same=false
            continue
        }
        if(stack[top]===popped[j]){
            stack.pop()
            top--;
            j++
            same=false
            continue
        }else if(i!==pushed.length){
            stack.push(pushed[i])
            i++
            top++
            same=false
            continue
        }
        same=true
    }
    stack.length=0
    return top===-1;
};