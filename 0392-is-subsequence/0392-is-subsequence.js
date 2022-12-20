/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0;
    let j=0;
    while(i<s.length && j<t.length){
        const val=s[i].localeCompare(t[j]);
        if(val===0){
            i+=1;
            j+=1;
        }
        else
            j+=1;
    }
    if(i===s.length)    return true;
    else
        return false;
};