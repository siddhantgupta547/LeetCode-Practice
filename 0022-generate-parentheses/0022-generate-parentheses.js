/**
 * @param {number} n
 * @return {string[]}
 */

function checkBalanced(str){
    if(str[0]===')'){
        return false
    }
    const stack=[]
    for(let i=0;i<str.length;i++){
        let top=stack.length-1
        let elem=str[i]
        if(top===-1){
            stack.push(elem)
            continue
        }else if(stack[top]==='(' && elem===')'){
            stack.pop()
        }else{
            stack.push(elem)
        }
    }
    return stack.length===0
}

var generateParenthesis = function(n) {
    const result=[]
    let count=0
    function generateAll(current,open,close){
        const equal=open===close
        if(close>open || open>n){
            return
        }
        if(current.length===2*n){
            if(equal){
                if(checkBalanced(current))
                    result.push(current)
            }
            return
        }
        generateAll(current+'(',open+1,close)
        generateAll(current+')',open,close+1)
    }

    generateAll('',0,0)
    return result
    
};