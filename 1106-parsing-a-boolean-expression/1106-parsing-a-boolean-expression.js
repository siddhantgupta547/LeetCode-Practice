/**
 * @param {string} expression
 * @return {boolean}
 */

function solveEquation(operands, operator){
    
}

var parseBoolExpr = function(expression) {
    const stack=[]
    const operators=[]
    let result;
    const set=new Set(['t','f','('])
    for(let i=0;i<expression.length;i++){
        const current=expression[i]
        if(current===','){
            continue
        }else if(set.has(current)){
            if(current==='f'){
                stack.push(false)
            }else if(current==='t'){
                stack.push(true)
            }else{
                stack.push(current)
            }
        }else if(current===')'){
            const operator=operators.pop()
            if(operator==='!'){          
                result=!stack.pop()  
                stack.pop()
                stack.push(result)
            }else{
                let last=null;
                let value=null;
                while(true){
                    const currentOperand=stack.pop()
                    if(currentOperand==='('){
                        break;
                    }
                    if(last===null){
                        last=currentOperand
                        continue;
                    }
                    if(operator==='&'){
                        if(value===null){
                            value=last&&currentOperand
                        }else{
                            value=value&&currentOperand
                        }
                    }else if(operator==='|'){
                        if(value===null){
                            value=last||currentOperand
                        }else{
                            value=value||currentOperand
                        }
                    }
                }
                if(value===null){
                   value=last
                }
                stack.push(value)
            }
        }else{
            operators.push(current)
        }
    }
    return stack.pop()
};