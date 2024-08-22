function numToBinary(num){
    if(num===1){
        return '1'
    }
    let binaryString=numToBinary(Math.floor(num/2))
    binaryString+=num%2
    return binaryString 
}

function binaryToNum(complementBinary){
    let currentPower=complementBinary.length-1;
    let num=0
    for(let i=0;i<complementBinary.length;i++){
        num+=Number(complementBinary[i])*Math.pow(2,currentPower)
        currentPower--
    }
    return num
}

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary=numToBinary(num)
    let complementBinary=''
    for(let i=0;i<binary.length;i++){
        if(binary[i]=='0'){
            complementBinary+=1
        }else{
            complementBinary+=0
        }
    }
    return binaryToNum(complementBinary)
};