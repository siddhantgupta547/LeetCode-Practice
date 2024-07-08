/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    if(n===1){
        return 1;
    }
    const values=[]
    let hero=0;
    for(let i=0;i<n;i++){
        values[i]=i+1
    }
    let count=n;
    let j=0
    let timesMoved=0
    while(count>1){
        if(values[j]===0){
            j++;
        }
        else{
        timesMoved++
        if(timesMoved===k){
            values[j]=0
            count--;
            timesMoved=0;
        }
              j++;
    }
        if(j===n){
            j=0;
        }
    }
    for(let i=0;i<n;i++){
        if(values[i]!==0){
            hero=values[i]
            break;
        }
    }
    return hero;
};