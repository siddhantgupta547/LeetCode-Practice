/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const result=[]
    let sum=0
    if(k>0){
    for(let i=1;i<=k;i++){
        let j=i
        if(i>=code.length){
           j=i-code.length;
        }
        sum+=code[j]
    }
    result.push(sum)
    for(let i=1;i<code.length;i++){
        sum-=code[i]
        let j=i+k
        if(j>=code.length){
            j=j-code.length
        }
        sum+=code[j]
        result.push(sum)
    }
    }else if(k===0){
        for(let i=0;i<code.length;i++){
            result.push(0)
        }
    }else{
        for(let i=code.length-(-k);i<code.length;i++){
        let j=i
        sum+=code[j]
        }
    result.push(sum)
        let m=0
    for(let i=1;i<code.length;i++){
        let toBeRemoved=code.length-(-k)+m
        if(toBeRemoved>=code.length){
            toBeRemoved-=code.length
        }
        sum-=code[toBeRemoved]
        let j=i+k
        if(j>=code.length){
            j=j-code.length
        }
        console.debug(code[toBeRemoved],toBeRemoved)
        sum+=code[i-1]
        result.push(sum)
        m++
    }
    }
    return result
};