/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let i=s.length-1;
    let top=-1
    const stack=[]
    const numbers=[]
    for(let i=0;i<s.length;i++){
        if(/[0-9]/.test(s[i])){
            let number=Number(s[i])
            i++
            while(/[0-9]/.test(s[i])){
                number=number*10+Number(s[i])
                i++
            }
            i--
            numbers.push(number)
        }else if(s[i]===']'){
            let toBeRepeated=''
            let output=''
            let times=numbers.pop()
            while(stack[top]!=='['){
                toBeRepeated=stack.pop()+toBeRepeated
                top--;
            }
            while(times>0){
                output+=toBeRepeated
                times--
            }
            stack.pop()
            top--;
            stack.push(output)
            top++
        }else{
            stack.push(s[i])
            top++
        }
    }
    let result=''
    for(let i=0;i<stack.length;i++){
        result+=stack[i]
    }
    return result
};