/**
 * @param {number} x
 * @return {number}
 */
function valueWithPower(x,power){
     const integerValue=Math.floor(x/10)
    if(integerValue<=0){
        return {value:x,toBeMultiplied:power}
    }
    const {value,toBeMultiplied} = valueWithPower(integerValue,power+1) 
    return {value:x%10*(Math.pow(10,toBeMultiplied-power))+value,toBeMultiplied}
}

var reverse = function(x) {
    const isNegative=x<0;
    const integerValue=Math.floor(x/10)
    if(integerValue>=0 && integerValue<1){
        return x
    }
    const maxMinValue=Math.pow(2,31)
    if(x<(maxMinValue*-1)||x>maxMinValue){
        return 0;
    }
    const {value,toBeMultiplied}= valueWithPower(Math.abs(x),0)
        if(value<(maxMinValue*-1)||value>maxMinValue){
        return 0;
    }
    if(isNegative){
        return value*-1
    }
    return value;
};