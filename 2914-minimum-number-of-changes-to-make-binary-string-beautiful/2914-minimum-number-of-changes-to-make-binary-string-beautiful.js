/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let currChar=''
    let count=0
    let changes=0
    for(let i=0;i<s.length;i++){
        if(currChar===''){
            currChar=s[i]
            count++
            continue
        }
        if(s[i]===currChar){
            count++
        }else{
            if(count%2===0){
                count=1
                currChar=s[i]
            }else{
                changes++
                count=0
                currChar=''
            }
        }
    }
    return changes
};