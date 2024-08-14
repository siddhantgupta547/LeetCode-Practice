/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;
    let j=height.length-1;
    let maxArea=0
    while(i<j){
        const currArea=(j-i)*Math.min(height[i],height[j]);
        if(currArea>maxArea){
            maxArea=currArea
        }
        if(height[i]<=height[j]){
            i++
        }else{
            j--
        }
    }
    return maxArea;
};