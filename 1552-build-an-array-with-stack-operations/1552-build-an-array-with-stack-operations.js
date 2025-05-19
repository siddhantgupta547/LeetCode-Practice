/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const stack=[]
    let i=1
    let index=-1
    let operations=[]
    while(i<=n){
        if(index===-1){
            stack.push(i)
            operations.push('Push')
            index++
        }else if(i!==stack[index]){
            stack.push(i)
            operations.push('Push')
            index++
        }else if(stack.length===target.length && stack[index]===target[index]){
            break;
        }else if(target[index]>stack[index]){
            stack.pop()
            operations.push('Pop')
            index--
            i++
        }else if(target[index]===stack[index]){
            i++
        }
    }
    return operations
};