/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let chair=[]
    let targetFriendArrivalTime=times[targetFriend][0]
    let result=Number.MIN_SAFE_INTEGER
    times.sort((a,b)=>a[0]-b[0])
    for(let i=0;i<times.length;i++){
        let pushed=false
        for(let j=0;j<chair.length;j++){
            if(chair[j]<=times[i][0]){
                chair[j]=times[i][1]
                if(times[i][0]===targetFriendArrivalTime){
                    result=j
                }
                pushed=true
                break
            }
        }
        if(!pushed){
            chair.push(times[i][1])
            if(times[i][0]===targetFriendArrivalTime){
                result=chair.length-1
                break;
            }
        }
        if(result!==Number.MIN_SAFE_INTEGER){
            break;
        }
    }
    return result
};