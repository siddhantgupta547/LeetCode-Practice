/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const splitString=s.split(" ")
    if(pattern.length!==splitString.length){
        return false
    }
    const map=new Map()
    const patternArray=[]
    let variety=0
    let result=true
    for(let i=0;i<pattern.length;i++){
        if(map.has(pattern.charAt(i))){
            patternArray.push(map.get(pattern.charAt(i)))
        }else{
            variety++;
            patternArray.push(variety)
            map.set(pattern.charAt(i),variety)
        }
    }
    map.clear()
    variety=0;
    for(let i=0;i<splitString.length;i++){
        if(!map.has(splitString[i])){
            variety++;
            map.set(splitString[i],variety)
        }
        if(map.get(splitString[i])!==patternArray[i]){
            result=false
            break;
        }
    }
    return result
};