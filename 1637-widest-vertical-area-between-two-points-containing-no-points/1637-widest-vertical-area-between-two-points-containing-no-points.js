/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xArray=[]
    points.forEach(point=>{
        xArray.push(point[0])
    })
    xArray.sort((a,b)=>a-b)
    let max=0;
    for(let i=0;i<xArray.length-1;i++){
        const diff=xArray[i+1]-xArray[i];
        if(diff>max) max=diff;
    }
    return max;
};