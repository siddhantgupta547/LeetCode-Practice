function getToGivenNumber(prev:number,current:number,n:number):number{
    if(n===0){
        return 0;
    }
    if(n===1){
        return current;
    }
    return getToGivenNumber(current,prev+current,n-1)
}

function fib(n: number): number {
    return getToGivenNumber(0,1,n)
};