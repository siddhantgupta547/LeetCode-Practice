/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=0;
    candies.forEach(num=>{
        if(max<num)max=num
    })
    for(let i=0;i<candies.length;i++){
        candies[i]=candies[i]+extraCandies>=max
    }
    return candies;
};