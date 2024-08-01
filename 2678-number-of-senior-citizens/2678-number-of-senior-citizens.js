/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count=0;
    let characterArray=[]
    details.forEach(item=>{
        characterArray=item.split('')
        const age=Number(characterArray[11])*10+Number(characterArray[12])
        if(age>60)  count++
    })
    return count
};