/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    const uniq= new Set();
    let maxLength=0;
    let currentLength=0;
    while(i<s.length){
        if(uniq.has(s[i])){
            uniq.delete(s[j++])
            currentLength--;
        }
        else{
            uniq.add(s[i]);
            i++;
            currentLength++;
            if(currentLength>maxLength){
                maxLength=currentLength;
            }
        }
    }
    return maxLength;
};