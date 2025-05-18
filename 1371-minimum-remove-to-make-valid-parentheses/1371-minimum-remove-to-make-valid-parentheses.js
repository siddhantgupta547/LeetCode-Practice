/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack=[]
    let top=-1
    const array=s.split('')
    for(let index=0;index<array.length;index++){
        let curr=array[index]
        if(curr==='('){
            stack.push([curr,index])
            array[index]=-1
            top++
        }else if(curr===')'){
            if(top!==-1 && stack[top][0]==='('){
                const reverse=stack.pop()
                array[reverse[1]]='('
                top--
            }else{
                stack.push([curr,index])
                top++
                array[index]=-1
            }
        }
        
    }
    let result=''
    for(let index=0;index<array.length;index++){
        const curr=array[index]
        if(curr!==-1){
            result+=curr
        }
    }
    return result
};