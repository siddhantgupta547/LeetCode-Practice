/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack=[]
    let top=-1
    for(let i=0;i<asteroids.length;i++){
        if(top===-1){
            stack.push(asteroids[i])
            top++
        }else{
            if(stack[top]>0 && asteroids[i]<0){
                let run=true
                while(run && top!==-1){
                    if(stack[top]>0 && asteroids[i]<0 && stack[top]<Math.abs(asteroids[i]) && top!==-1){
                        const last=stack.pop()
                        top--
                        run=true
                        if(top===-1){
                            stack.push(asteroids[i])
                            top++
                            run=false
                        }
                    }else if(!(stack[top]>0 && asteroids[i]<0)){
                        stack.push(asteroids[i])
                        run=false
                        top++
                    }else if(stack[top]>0 && asteroids[i]<0 &&stack[top]===Math.abs(asteroids[i]) &&top!==-1){
                        const last=stack.pop()
                        top--
                        run=false
                             if(top===-1 && last!==Math.abs(asteroids[i])){
                  stack.push(asteroids[i])
                            top++
                            run=false
                        
                    }
                             }
                    else{
                        run=false
                    }
                }
            }
            else{
                stack.push(asteroids[i])
                top++
            }
        }
    }
    return stack
};