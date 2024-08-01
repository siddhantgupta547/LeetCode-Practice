/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count=0;
    let characterArray=[]
    details.forEach(item=>{
        const age = Number(item[11] + item[12])
        if(age>60)  count++
    })
    return count
};