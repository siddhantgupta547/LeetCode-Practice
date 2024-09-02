/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let i=0;
    let sum=0
    let temp=k
    chalk.forEach(item=>sum+=item)
    let remainingValue = k%sum
    while(remainingValue>0){
        if(remainingValue-chalk[i]<0){
            break;
        }
        remainingValue-=chalk[i]
        i++
    }
    return i
};