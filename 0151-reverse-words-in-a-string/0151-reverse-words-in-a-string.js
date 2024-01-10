/**
 * @param {string} s
 * @return {string}
 */
function appendString(word,reversedString){
    if(word!=='' && reversedString!==''){
                reversedString=word+" "+reversedString;
            }
            else if(word!=='' && reversedString===''){
                reversedString=word
            }
    return reversedString;
}

var reverseWords = function(s) {
    let reversedString=''
    let word=''
    for(let i=0;i<s.length;i++){
        if(s[i]!==' '){
            word+=s[i];
        }
        else{
            reversedString=appendString(word,reversedString)
            word=''
        }
    }
    reversedString=appendString(word,reversedString);
    return reversedString
};