/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const groupedObject={}
    this.forEach((item)=>{
        const key=fn(item);
        if(key in groupedObject){
            groupedObject[key].push(item);
        }else{
            groupedObject[key]=[item]
        }
    })
    return groupedObject;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */