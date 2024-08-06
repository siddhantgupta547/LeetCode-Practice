/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const map= new Map()
    const freqArray=[]
    for(let i=0;i<word.length;i++){
        if(map.has(word[i])){
            map.set(word[i],map.get(word[i])+1)
        }
        else{
            map.set(word[i],1)
        }
    }
    map.forEach((value,key)=>{
        freqArray.push([key,value])
    })
    freqArray.sort((a,b)=>b[1]-a[1])
    let count=1;
    let output=0
    let numberToBeMappedTo=2
    for(let i=0;i<freqArray.length;i++){
        if(numberToBeMappedTo===10){
            count++
            numberToBeMappedTo=2;
        }
        output+=freqArray[i][1]*count
        numberToBeMappedTo++
    }
    return output
};