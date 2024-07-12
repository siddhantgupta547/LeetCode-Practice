/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let greater;
    let smaller;
    let firstPass=''
    let secondPass=''
    const stack=[]
    let total=0
    let remainingString=''
    if(x>=y){
        greater=x
        firstPass="ab"
        smaller=y
        secondPass="ba"
    }else{
        greater=y
        firstPass="ba"
        smaller=x
        secondPass="ab"
    }
    for(let i=0;i<s.length;i++){
        if(stack.length===0){
            stack.push(s.charAt(i))
            continue;
        }
        if(stack[stack.length-1]+s.charAt(i)===firstPass){
                total+=greater
            stack.pop();
        }
                else{
            stack.push(s.charAt(i))
        }
    }
    for(let i=0;i<stack.length;i++){
        remainingString+=stack[i]
    }
    stack.length=0
    for(let i=0;i<remainingString.length;i++){
        if(stack.length===0){
            stack.push(remainingString.charAt(i))
            continue;
        }
        if(stack[stack.length-1]+remainingString.charAt(i)===secondPass){
                total+=smaller
            stack.pop()
        }
                else{
            stack.push(remainingString.charAt(i))
        }
    }
    return total
}
