/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let countZeroes=0;
    let countOnes=0;
    let score=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="1")  countOnes++;
    }
    for(let i=0;i<s.length-1;i++){
        if(s[i]==="1")  countOnes--;
        else    countZeroes++;
        if(countOnes+countZeroes>score){
            score=countOnes+countZeroes;
        }
    }
    return score;
};