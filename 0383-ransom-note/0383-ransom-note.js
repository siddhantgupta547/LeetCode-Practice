/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map=new Map()
    for(let i=0;i<magazine.length;i++){
        if(map.has(magazine[i])){
            map.set(magazine[i],map.get(magazine[i])+1)
        }else{
            map.set(magazine[i],1)
        }
    }
    for(let i=0;i<ransomNote.length;i++){
        if(map.has(ransomNote[i])){
            let val=map.get(ransomNote[i])
            val--
            if(val===0){
                map.delete(ransomNote[i])
            }else{
                map.set(ransomNote[i],val)
            }
        }else{
            return false
        }
    }
    return true
};