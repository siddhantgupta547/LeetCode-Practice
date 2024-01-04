/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
     let prevCount=0;
    let numberOfBeams=0
    bank.forEach(item=>{
        const count=item.split('').filter(item=>item==="1").length
        if(count){
            numberOfBeams+=prevCount*count;
            prevCount=count;
        }
    })
    return numberOfBeams
};