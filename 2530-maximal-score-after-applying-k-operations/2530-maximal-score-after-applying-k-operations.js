/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const queue = new MaxPriorityQueue();
    for (let i=0;i<nums.length;i++) {
        queue.enqueue(nums[i]);
    }
    
    let score = 0;
    while(k>0) {
        const max = queue.dequeue().element;
        score += max;
        queue.enqueue(Math.ceil(max / 3));
        k--
    }
    return score;
};