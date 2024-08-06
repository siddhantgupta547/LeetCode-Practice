/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let output=0
    let count=1;
    let mapped=0
    for(let i=0;i<word.length;i++){
        if(mapped>7){
            count++
            mapped=0;
        }
        output+=count
        mapped++
    }
    return output
};