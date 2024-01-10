/**
 * @param {character[]} chars
 * @return {number}
 */
function loopThrough(count, chars, countLength,j){
    while(countLength>0){
        chars[j+countLength-1]=`${count%10}`;
        count=Math.floor(count/10)
        countLength--;
    }
}

var compress = function(chars) {
    let i=0;j=0;
    let currentCharacter;
    let count=0;
    let decimal=1;
    while(i<chars.length){
        if(chars[i]===currentCharacter){
            count++;
        }
        else if(currentCharacter && chars[i]!==currentCharacter){
            currentCharacter=chars[i];
                       if(count>1){
            loopThrough(count,chars,`${count}`.length,j)
                j+=`${count}`.length;
                       }
            chars[j++]=chars[i]
            count=1;
        }
        else{
            currentCharacter=chars[i];
            count=1;
            j++
        }
        i++;
    }
    if(count!==1){
        loopThrough(count,chars,`${count}`.length,j)
        j+=`${count}`.length;
    }
    return j;
};