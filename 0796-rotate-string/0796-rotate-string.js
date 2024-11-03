/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!==goal.length)
        return false
    // if(s===goal){
    //     return true
    // }
    // let count=0
    // let sArray=s.split('')
    // while(count<=s.length){
    //     const first=sArray.shift()
    //     sArray.push(first)
    //     if(sArray.join('')===goal){
    //         return true
    //     }
    //     count++
    // }
    // return false
    const con=s+s
    return con.includes(goal)
};