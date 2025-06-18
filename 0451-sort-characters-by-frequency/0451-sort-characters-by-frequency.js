/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map=new Map()
    for(let idx=0;idx<s.length;idx++){
        const char=s[idx]
        if(map.has(char)){
            const curr=map.get(char)
            map.set(char,curr+1)
        }else{
            map.set(char,1)
        }
    }
    const mapArr=[]
    map.forEach((value,key)=>mapArr.push([key,value]))
    mapArr.sort((a,b)=>b[1]-a[1])
    let result=''
    for(let idx=0;idx<mapArr.length;idx++){
        let freq=mapArr[idx][1]
        let char=mapArr[idx][0]
        while(freq){
            result+=char
            freq--
        }
    }
    return result
};