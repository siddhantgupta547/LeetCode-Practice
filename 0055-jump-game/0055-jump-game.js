/**
 * @param {number[]} nums
 * @return {boolean}
 */
function currentIndex(index,lastIndex,nums,set){
    if(index===lastIndex){
        return true
    }else if(index>lastIndex){
        return false
    }else{
        let item=nums[index]
        while(item>0){
            if(set.has(index+item)){
                item--
                continue
            }
            if(currentIndex(index+item,lastIndex,nums,set)){
                return true
            }else{
                set.add(index+item)
            }
            item--
        }
    }
}

var canJump = function(nums) {
   //  const set=new Set()
   // if(currentIndex(0,nums.length-1,nums,set)){
   //      return true
   // }else{
   //  return false
   // }
    let bottomUp=new Array(nums.length)
    bottomUp[0]=true
    for(let i=1;i<nums.length;i++){
        for(let j=i-1;j>=0;j--){
            if(bottomUp[j] && j+nums[j]>=i){
                bottomUp[i]=true
                break
            }else{
                bottomUp[i]=false
            }
         }
    }
    return bottomUp[nums.length-1]
};