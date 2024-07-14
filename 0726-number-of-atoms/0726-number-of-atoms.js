/**
 * @param {string} formula
 * @return {string}
 */
 
var countOfAtoms = function(formula) {
    var form = formula.split("")
    var letters = {}
  /**This array is to keep the order of the letters**/
    var order = []
    //this stack is to save every number
    var stack = []
    var current
    var dos , value, prev;
   
    //Iterates trough the input
    for(var i=0; i<formula.length;i++){
        value = 1
    //Always using the last value in the input
        current = form.pop()
    //If there is a number put it in the stack
        if(/[0-9]/.test(current)){
            //If the previous is a number concatenate both
            if(/[0-9]/.test(prev)){
               var help = stack.lastIndexOf(Number(prev,10))
               stack[help] = Number(current+prev,10)
            }
              else{
               stack.push(Number(current,10))
              }
           }
    //If the letter is lowercase save it
       else if(/[a-z]/.test(current) ){
            dos = current
        }
    //Every time a parenthesis is closed extract from the stack the last value
        else if(current == "(" ){
            stack.pop()
        }
    
    //Checks for upperase values to save them in the map
        else if(/[A-Z]/.test(current)){
         //If you have a lowwercase saved concatenate them
            if(dos){
               current = current + dos
               dos = ""
               }
        //Multiply every value on the stack to get the value of this element
            for(var j=0;j<stack.length;j++){
                value = value * stack[j]
            }
        //Operations to create the map
            if(!letters[current]){
               letters[current] = value
               }
            else{
                letters[current] += value
            }
         //If the previous value was a number remove it from the stack  
            if(/[0-9]/.test(prev)){
                stack.pop()
            }
          //Operations to fill the order matrix  
           if(!order.includes(current)){
              order.push(current)
              }
            else{
               order.splice(order.indexOf(current),1) 
              order.push(current) 
            }
            
        }
       //If the dos variable has something keep the number as the prev 
        if(dos){
           prev = prev
           }
        else{  
          prev = current  
        }             
    }

    //This part is to put in form the result
    var result = ""

    order.sort()
    
    for(var k=0;k<order.length;k++){
        if(letters[order[k]] < 2) {
            result += order[k] 
         }
    else{
        result += order[k] + letters[order[k]]
       }
        
    }
    
    return result
};
