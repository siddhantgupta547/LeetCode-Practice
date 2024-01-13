/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        const leftProductArray=[]
        const rightProductArray=[]
        const productArray=[]; 
        let lastProd=1;
        for(let i=0;i<nums.length;i++){
            if(i===0)
                productArray[i]=1
            else
                productArray[i]=lastProd
            lastProd*=nums[i];
        }
        lastProd=1;
        for(let i=nums.length-1;i>=0;i--){
            if(i===nums.length-1)
                productArray[i]*=1
            else
                productArray[i]*=lastProd
            lastProd*=nums[i];
        }
    return productArray
};