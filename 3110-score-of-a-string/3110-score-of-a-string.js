/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let prev= s.charCodeAt(0)
    let score=0;
    for(let i=1;i<s.length;i++){
        const current=s.charCodeAt(i)
        score+=Math.abs(current-prev)
        prev=current;
    }
    return score;
};