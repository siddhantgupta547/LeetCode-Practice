/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let resultant=''
    let index=0
    for(let i=0;i<s.length;i++){
        if(i===spaces[index]){
            resultant+=` ${s[i]}`
            index++
        }else{
            resultant+=s[i]
        }
    }
    return resultant
};