/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let idxG=0
    let idxS=0
    let count=0
    while(idxS <s.length && idxG<g.length){
        const greed=g[idxG]
        const size=s[idxS]
        if(size>=greed){
            idxG++
            idxS++
            count++
        }else{
            idxS++
        }
    }
    return count
};