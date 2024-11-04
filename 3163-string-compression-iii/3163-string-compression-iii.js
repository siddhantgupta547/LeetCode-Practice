/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
   let result=''
   let count=1
   let prev=word[0]
   for(let i=1;i<word.length;i++){
       if(word[i]===prev){
           if(count===9){
                result+=`${count}${prev}`
               count=0
           }
       }else{
           result+=`${count}${prev}`
           count=0
       }
       count++
       prev=word[i]
   }
    result+=`${count}${prev}`
    return result
};