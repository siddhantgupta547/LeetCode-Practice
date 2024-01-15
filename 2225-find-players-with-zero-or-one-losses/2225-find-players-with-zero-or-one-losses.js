/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const losers= new Map();
    const players= new Set();
    const result=[[],[]]
    matches.forEach(match=>{
        players.add(match[0]);
        players.add(match[1]);
        if(losers.has(match[1])){
            losers.set(match[1],losers.get(match[1])+1)
        }
        else{
            losers.set(match[1],1)
        }
    })
    players.forEach(player=>{
        if(losers.has(player)){
            if(losers.get(player)===1){
                result[1].push(player);
            }
        }
        else{
            result[0].push(player);
        }
    })
    result[0].sort((a,b)=>a-b)
    result[1].sort((a,b)=>a-b)
    return result;
    
};