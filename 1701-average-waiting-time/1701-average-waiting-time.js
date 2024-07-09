/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let delay=0;
    let currentTime=0;
    let totalWaitTime=0
    for(let i=0;i<customers.length;i++){
        const startTime=customers[i][0]
        if(currentTime>startTime){
            delay=currentTime-customers[i][0]
        }
        else{
            delay=0
        }
        currentTime=customers[i][0]+customers[i][1]+delay
        totalWaitTime+=delay+customers[i][1]
    }
    return totalWaitTime/customers.length
};