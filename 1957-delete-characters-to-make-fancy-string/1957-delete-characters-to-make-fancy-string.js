/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let resultantString=''
    let prev=''
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]===prev){
            count++
            if(count<=1){
                resultantString+=s[i]
            }
        }else{
            count=0
            resultantString+=s[i]
        }
        prev=s[i]
    }
    return resultantString
};