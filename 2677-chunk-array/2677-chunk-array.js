/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunks=[];
    let chunk=[];
    let count=0;
    for(let i=0;i<arr.length;i++){
        count++;
        if(count===size){
            chunk.push(arr[i]);
            chunks.push(chunk);
            chunk=[];
            count=0;
        }
        else{
            chunk.push(arr[i]);
        }
    }
    if(chunk.length>0)
        chunks.push(chunk);
    return chunks;
};
