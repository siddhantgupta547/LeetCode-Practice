/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const s1Map= new Map()
    const s2Map=new Map()
    s1.split(' ').forEach(item=>{
        if(s1Map.has(item)){
            s1Map.set(item,s1Map.get(item)+1)
        }else{
            s1Map.set(item,1)
        }
    })
    s2.split(' ').forEach(item=>{
        if(s2Map.has(item)){
            s2Map.set(item,s2Map.get(item)+1)
        }else{
            s2Map.set(item,1)
        }
    })
    const result=[]
    s1Map.forEach((value,key)=>{
        if(value<2 && !s2Map.has(key)){
            result.push(key)
        }
    })
    s2Map.forEach((value,key)=>{
        if(value<2 && !s1Map.has(key)){
            result.push(key)
        }
    })
    return result
};