/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;j=0;
    let outputString=''
    let combinedLength=word1.length+word2.length;
    while(combinedLength>0){
        if(word1[i])
            outputString+=word1[i++];
        if(word2[j])
            outputString+=word2[j++];
        combinedLength--;
    }

    return outputString
};