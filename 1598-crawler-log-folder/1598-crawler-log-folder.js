/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack=[]
    for(let i=0;i<logs.length;i++){
        if(logs[i]==='../'){
            if(stack.length>0)
                stack.pop()
        }else if(logs[i]==='./'){
            continue;
        }else{
            stack.push('folder')
        }
    }
    return stack.length
};