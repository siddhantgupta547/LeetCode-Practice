/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelSet= new Set(['a','e','i','o','u'])
    let start=0;
    let end=s.length-1
    let resultantString=[]
    while(start<=end){
        if(!vowelSet.has(s[start].toLowerCase())){
            resultantString[start]=s[start]
            start++
        }else if(!vowelSet.has(s[end].toLowerCase())){
            resultantString[end]=s[end]
            end--
        }else{
            const temp= s[start] 
            resultantString[start]=s[end]
            resultantString[end]=temp
            start++
            end--
        }
    }
    let reversedString=''
    for(let i=0;i<resultantString.length;i++){
        reversedString+=resultantString[i]
    }
    return reversedString
};