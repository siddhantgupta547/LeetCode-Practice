/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
      let changes = {}
    for(let bill of bills){
        if(bill === 5){
            changes[5] = changes[5] ? changes[5] + 1 : 1 
        } else if(bill === 10){
            if(changes[5] > 0){
                changes[5] -= 1
                changes[10] = changes[10] ? changes[10] + 1 : 1 
            } else {
                return false
            }
        } else {
            if(changes[5] > 0 && changes[10] > 0){
                changes[5] -= 1
                changes[10] -= 1
            } else if(changes[5] >= 3){
                changes[5] -= 3
            }else{
                return false
            }
        }
    }
    return true
};