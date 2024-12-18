/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
//    const stack = [];
//     const res = [];

//     for(let i=prices.length-1; i>=0; i--) {
//         while(stack.length > 0 && stack[stack.length - 1] > prices[i]) {
//             stack.pop();
//         }
//         res[i] = prices[i] - (stack[stack.length - 1] ?? 0);
//         stack.push(prices[i]);
//     }

//     return res;
       const stack=[]
    for(let i=0;i<prices.length;i++){
        let top=stack[stack.length-1]
        if(stack.length){
            if(prices[top]<prices[i]){
                stack.push(i)
            }else{
                while(true){
                    top=stack[stack.length-1]
                    if(prices[top]>=prices[i]){
                        prices[top]=prices[top]-prices[i]
                        stack.pop()
                    }else{
                        stack.push(i)
                        break
                    }
                }
            }
        }else{
            stack.push(i)
        }
    }
    return prices
};