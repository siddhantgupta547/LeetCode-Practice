/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map={}
    for(let i=0;i<p.length;i++){
        const item=p[i]
        if(item in map){
            map[item]+=1
        }else{
            map[item]=1
        }
    }
    let i=0;
    let j=0;
    let count=p.length;
    let output=[]
    while(i<s.length&&j<s.length){
        if(s[j] in map){
            map[s[j]]-=1
            if(map[s[j]]>=0){
                count--
            }
        }
        if(j-i===p.length-1){
            if(count===0){
                output.push(i)
            }
            if(s[i] in map){
            if(map[s[i]]>=0){
                count++
            }
                map[s[i]]+=1
            }
            i++
        }
        j++
    }
    return output
};