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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root){
        return []
    }
    const queue=[[0,root]]
    const result=[]
    while(queue.length>0){
        const [level,node]=queue.shift()
        let curr=result[level]
        if(curr===null || curr===undefined){
            curr=Number.MIN_SAFE_INTEGER
        }
        curr=Math.max(curr,node.val)
        result[level]=curr
        if(node.left){
            queue.push([level+1,node.left])
        }

        if(node.right){
            queue.push([level+1,node.right])
        }
    }
    return result
};