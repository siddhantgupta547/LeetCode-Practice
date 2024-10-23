/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerBed, n) {
    let i=0;
    while(i<flowerBed.length){
        const l=flowerBed.length
        if(flowerBed[i]===0){
            const left=i===0||flowerBed[i-1]===0
            const right=i===l-1||flowerBed[i+1]===0
            if(left&&right){
                if(n===0){
                    return true
                }
                n--
                flowerBed[i]=1
            }
        }
        i++
    }
    if(n===0){
        return true
    }else{
        return false
    }
};