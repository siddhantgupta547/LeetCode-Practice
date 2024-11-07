/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
     let mask = 1
    let result = 0
    
    
    for (let offset = 0; offset < 32; offset++, mask <<= 1) {
        let outcome = 0
        for (const val of candidates.values()) {
            if (val & mask)
                outcome++
        }
        
        
        result = Math.max(result, outcome)
    }
    
    
    return result
};