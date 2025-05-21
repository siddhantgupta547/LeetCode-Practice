/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    // const stack=[]
    // let top=-1
    // let i=0
    // while(i<nums.length){
    //     let num=nums[i]
    //     if(top===-1){
    //         stack.push(num)
    //         top++
    //         i++
    //     }else if(top===0){
    //         const peek=stack[top]
    //         if(num>peek){
    //             stack.push(peek)
    //             top++
    //             i++
    //         }else if(num<peek){
    //             i++
    //         }
    //     }else if(top===1){
    //         const peek=stack[top]
    //         if(num<peek){
    //             return true
    //         }else if(num>peek){
    //             stack.pop()
    //             top--
    //         }
    //     }
    // }
    // return false

    let stack = [];
    let third = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < third) return true;
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            third = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;

};