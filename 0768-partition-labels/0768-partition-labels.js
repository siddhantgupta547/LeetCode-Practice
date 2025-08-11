/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const frequencyMap=new Map()
    for(let idx=0;idx<s.length;idx++){
        const item=s[idx]
        if(frequencyMap.has(item)){
            const value=frequencyMap.get(item)+1
            frequencyMap.set(item,value)
        }else{
            frequencyMap.set(item,1)
        }
    }
    const set=new Set()
    const arr=[]
    let result=''
    for(let idx=0;idx<s.length;idx++){
        const item=s[idx]
        const value=frequencyMap.get(item)-1
        frequencyMap.set(item,value)
        if(value===0){
            set.delete(item)
            result+=item
        }else{
            set.add(item)
            result+=item
        }

        if(set.size===0){
            arr.push(result.length)
            result=''
        }
    }
    return arr
};