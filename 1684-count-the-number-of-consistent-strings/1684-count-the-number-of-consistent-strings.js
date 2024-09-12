/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
    for(let i=0;i<words.length;i++){
        const word=words[i].split("")
        let valid=true
        for(let j=0;j<word.length;j++){
            if(!allowed.includes(word[j])){
                valid=false
                break;
            }
        }
        if(valid){
            count++
        }
    }
    return count
};