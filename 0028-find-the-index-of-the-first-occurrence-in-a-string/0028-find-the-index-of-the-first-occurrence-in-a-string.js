/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needlePointer=0;
    let out=-1;
    if(haystack.length<needle.length)   return -1;
    for(let i=0;i<haystack.length;i++){
        if(needle.charAt(needlePointer)===haystack.charAt(i)){
            if(needlePointer===0)   out=i;
            needlePointer++;
        }
        else if(needlePointer>needle.length-1){
            break;
        }
        else{        
            i=i-needlePointer;
            out=-1;
            needlePointer=0;
        }
    }
    if(needlePointer<=needle.length-1)  out=-1;
    return out;
};