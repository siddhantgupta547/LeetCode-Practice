/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i=s.length-1;
    let startFlag=false;
    let count=0;
    for(let i=s.length-1;i>=0;i--){
        if(s.charAt(i)!==" "&&startFlag===false){
            startFlag=true;
            count++;
        }else if(startFlag===true && s.charAt(i)===" "){
            break;
        }
        else if(s.charAt(i)===" "){
            continue;
        }
        else{
            count++;
        }
    }

    return count;
};