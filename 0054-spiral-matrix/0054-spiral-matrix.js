/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let direction=0
    let result=[]
    let i=0;
    let j=0;
    let rows=matrix.length
    let cols=matrix[0].length
    let maxRows=rows-1
    let maxCols=cols-1
    let count=0;
    while(result.length!==rows*cols){
        result.push(matrix[i][j])
        if(direction===0){
            if(j===cols-1 || count==maxCols){
                i++
                direction=1;
                maxRows--
                count=0
            }
            else{
                j++
                count++
            }
        }else if(direction===1){
            if(i===rows-1   || count==maxRows){
                direction=2
                j--;
                maxCols--;
                count=0

            }else{
                i++
                count++
            }
        }else if(direction===2 ){
            if(j===0 || count==maxCols){
                direction=3
                i--;
                maxRows--
                count=0

            }else{
                j--
                count++
            }
        }else{
            if(i===0  || count==maxRows){
                direction=0
                j++;
                maxCols--               
                count=0
            }else{
                count++
                i--
            }
        }
    }
    return result
};