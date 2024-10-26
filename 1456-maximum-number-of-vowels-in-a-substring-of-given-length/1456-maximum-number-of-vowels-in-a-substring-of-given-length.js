/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let kVowels=0
    const set=new Set(['a','e','i','o','u'])
    for(let i=0;i<k;i++){
        if(set.has(s[i])){
            kVowels++
        }
    }
    let windowVowels=kVowels
    for(let i=k;i<s.length;i++){
        if(set.has(s[i-k])){
            windowVowels--
        }
        if(set.has(s[i])){
            windowVowels++
        }
        if(windowVowels>kVowels){
            kVowels=windowVowels
        }
    }
    return kVowels
};