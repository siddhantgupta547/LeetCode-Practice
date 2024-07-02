/**
 * @param {string} s
 * @return {string}
 */
function stackStar(stack,s){
    if(s.length===0){
        return stack
    }
    if(s.charAt(0)!=="*"){
        stack.push(s.charAt(0))
    }
    else{
        stack.pop()
    }
    return stackStar(stack,s.substring(1))
}

var removeStars = function(s) {
    const stack=new Array();
    let resultantString=""
    stackStar(stack,s,)
    for(let i=0;i<stack.length;i++){
        resultantString+=stack[i]
    }
    return resultantString
};