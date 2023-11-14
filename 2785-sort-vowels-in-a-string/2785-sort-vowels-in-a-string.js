/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
   const vowels=['a','e','i','o','u','A','E','I','O','U'];
    const indexAndValues={};
    const asciiValues=[];
    let result='';
    for(let i=0;i<s.length;i++){
        if(vowels.indexOf(s[i])!==-1){
            const ascii=s.charCodeAt(i);
            indexAndValues[i]=ascii;
            asciiValues.push(ascii);
        }
    }
    if(asciiValues.length<=0)   return s;
    asciiValues.sort((b,a)=>a-b);
    for(let i=0;i<s.length;i++){
        if(vowels.indexOf(s[i])!==-1){
            const poppedChar=asciiValues.pop();
            result+=String.fromCharCode(poppedChar);
        }
        else{
            result+=s[i];
        }
    }
    return result;
};