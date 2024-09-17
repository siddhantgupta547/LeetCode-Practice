/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map= new Map()
    const newString=s1+" "+s2
    newString.split(' ').forEach(item=>{
        if(map.has(item)){
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
    })
    const result=[]
    map.forEach((value,key)=>{
        if(value<2){
            result.push(key)
        }
    })
    return result
};