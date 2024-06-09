function checkIsEqual(n:number,currentValue:number):boolean{
    if(currentValue>n){
        return false
    }
    if(currentValue===n){
        return true
    }
    return checkIsEqual(n,currentValue*2)
    
}

function isPowerOfTwo(n: number): boolean {
    if(n===0){
        return false
    }
    return checkIsEqual(n,1)
};