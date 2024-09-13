/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let result=[]
    for(let i=0;i<queries.length;i++){
        let value;
        for(let j=queries[i][0];j<=queries[i][1];j++){
            value=value^arr[j]
        }
        result[i]=value
    }
    return result
};