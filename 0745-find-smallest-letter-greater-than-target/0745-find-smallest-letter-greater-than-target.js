/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left=0
    let right=letters.length-1
    let result=letters[0]
    while(left<=right){
        const mid=left+Math.floor(right-left/2)
        const item=letters[mid]
        if(item>target){
            result=item
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return result
};