/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack=[]
    let result=''
    const array=path.split('/')
    for(let i=0;i<array.length;i++){
        const char=array[i]
        if(char==='' || char==='.'){
            continue
        }else if(char==='..'){
            if(stack.length>0)
                stack.pop()
        }else{
            stack.push(char)
        }
    }
    return '/'+stack.join('/')
};