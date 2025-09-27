/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    // function isPrime(num){
    //     const squareRoot=Math.floor(Math.sqrt(num))
    //     for(let idx=2;idx<=squareRoot;idx++){
    //         if(num%idx===0){
    //             return false
    //         }
    //     }
    //     return true
    // }

    // let num=2
    // let count=0
    // while(num<n){
    //     if(isPrime(num)){
    //         count++
    //     }
    //     num++
    // }
    // return count
    if(n===1 || n===0){
        return 0
    }

    const arr=new Array(n)
    arr.fill(true)
    arr[0]=false
    arr[1]=false
    for(let i=2;i<arr.length;i++){
        if(!arr[i]){
            continue
        }
        let j=2
        while(i*j<arr.length){
            arr[i*j]=false
            j++
        }
    }
    let count=0
    for(let i=2;i<arr.length;i++){
        if(arr[i]){
            count++
        }
    }
    return count
};