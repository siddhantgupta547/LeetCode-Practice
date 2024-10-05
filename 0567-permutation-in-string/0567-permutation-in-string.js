/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const obj=new Object()
    for(let i=0;i<s1.length;i++){
        if(s1[i] in obj){
            obj[s1[i]]+=1
        }else{
            obj[s1[i]]=1
        }
    }
    let i=0;
    let j=0;
    let window=false
    let objCopy={...obj}
    let length=s1.length
    while(i<=j && j<s2.length && length){
        if(s2[j] in objCopy){
            let currentVal=objCopy[s2[j]]
            currentVal--
            if(currentVal===0){
                delete objCopy[s2[j]]
            }else{
                objCopy[s2[j]]-=1
            }
            
            if(!window){
                window=true
            }
            length--
            j++
        }else{
            if(window){
                window=false
                objCopy={...obj}
                length=s1.length
            }
            i++
            j=i
        }
    }
    if(!length){
        return true
    }else{
        return false
    }
};