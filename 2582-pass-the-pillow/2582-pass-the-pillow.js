/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {   
    let current=1;
    let direction=0;
    for(let i=1;i<=time;i++){
        if(current===n){
            direction=1;
        }
        else if(current===1){
            direction=0;
        }
        if(direction===0){
            current++;
        }else{
            current--;
        }
    }
    return current;
};