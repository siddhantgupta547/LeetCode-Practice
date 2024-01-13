/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const frequencyS={}
    let steps=0
    for(let i=0;i<s.length;i++){
        if(s[i] in frequencyS){
            frequencyS[s[i]]+=1;
        }
        else{
            frequencyS[s[i]]=1;
        }
    }
    for(let i=0;i<t.length;i++){
        if(t[i] in frequencyS && frequencyS[t[i]]>0){
            frequencyS[t[i]]-=1;   
        }
        else{
            steps+=1
        }
    }
    return steps;
};