/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
     let output = [];
    
    let splits1 = s1.split(" ");
    
    let splits2 = s2.split(" ");
    
    let length = "";
    
    if(splits1.length > splits2.length){
        length = splits1.length;
    } else {
        length = splits2.length;
    }
    
    let map = {};
    
    for(let i = 0; i < length; i++){
        
        if(splits1[i] !== undefined ){
            map[splits1[i]] = (map[splits1[i]] || 0) + 1;
        }
        if(splits2[i] !== undefined ){
            map[splits2[i]] = (map[splits2[i]] || 0) + 1;
        }

    }
    
    
    Object.entries(map).map(([key,val]) => val === 1 ? output.push(key) : null);
    
    return output;
};