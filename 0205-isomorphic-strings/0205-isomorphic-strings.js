/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    const sWordMap= new Map()
    const tWordMap= new Map()
    for(let i=0;i<s.length;i++){
       if(sWordMap.has(s[i])){
           if(sWordMap.get(s[i])!==t[i]){
               return false
           }
       }else{
           sWordMap.set(s[i],t[i])
       }
        if(tWordMap.has(t[i])){
           if(tWordMap.get(t[i])!==s[i]){
               return false
           }
       }else{
           tWordMap.set(t[i],s[i])
       }
    }
    return true
};