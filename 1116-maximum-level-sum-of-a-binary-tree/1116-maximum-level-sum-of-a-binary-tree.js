/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    if(!root){
        return 1
    }
    let queue = []
    queue.push([1, root])
    let max = []
    let largest = Number.MIN_SAFE_INTEGER
    let result = -1
    while (queue.length > 0) {
        const [level, node] = queue.shift()
        if (max[level - 1]) {
            max[level - 1] += node.val
        } else {
            max[level - 1] = node.val
        }

        if (node.left) {
            queue.push([level + 1, node.left])
        }

        if (node.right) {
            queue.push([level + 1, node.right])
        }

    }

    for(let idx=0;idx<max.length;idx++){
        if(max[idx]>largest){
            largest=max[idx]
            result=idx+1
        }
    }
    return result
};