/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    left=1
    right=Math.min(...time) * totalTrips
    let result=0
    while(left<=right){
        const mid=left+Math.floor((right-left)/2)
        let trips=0
        time.forEach(trip=>{
            trips+=Math.floor(mid/trip)
        })
        if(trips>totalTrips){
            right=mid-1
            result=mid
        }else if(trips<totalTrips){
            left=mid+1
        }else{
            result=mid
            right=mid-1
        }
    }
    return result
};