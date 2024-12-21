/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sorted=[]
    for(let i=0;i<strs.length;i++){
        sorted[i]=strs[i].split('').sort((a,b)=>a.charCodeAt(0)-b.        charCodeAt(0)).join('')
    }
    let map=new Map()
    for(let i=0;i<sorted.length;i++){
        if(map.has(sorted[i])){
            let arr=map.get(sorted[i])
            arr.push(strs[i])
            map.set(sorted[i],arr)
        }else{
            map.set(sorted[i],[strs[i]])
        }
    }
    strs.length=0
    map.forEach((value)=>{
        strs.push(value)
    })
    return strs
};