/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const namesArray=names.map((item,index)=>({name:item,height:heights[index]}))
    namesArray.sort((a,b)=>b.height-a.height)
    for(let i=0;i<names.length;i++){
        names[i]=namesArray[i]['name']
    }
    return names
};