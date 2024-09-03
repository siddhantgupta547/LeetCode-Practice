/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let characterToNumber=''
    
    for(i=0;i<s.length;i++){
        characterToNumber+=(s.charCodeAt(i)-96)
    }
    let transformK=Number(characterToNumber)
    while(k>0 && characterToNumber.length>1){
        let newNumber=0
    for(let i=0;i<characterToNumber.length;i++){
        newNumber+=Number(characterToNumber[i])
    }
        k--
        characterToNumber=newNumber+''
    }
    return Number(characterToNumber)
};