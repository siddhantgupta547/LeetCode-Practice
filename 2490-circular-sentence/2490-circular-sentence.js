/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const array=sentence.split(" ")
    const lastWord=array[array.length-1]
    if(array[0][0]!==lastWord[lastWord.length-1]){
        return false
    }
    let i=0
    let j=1
    while(j<array.length){
        const first=array[i]
        const second=array[j]
        if(first[first.length-1]!==second[0]){
            return false
        }
        i++;
        j++;
    }
    return true
};