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


var maxDepth = function(root) {
//    if(!root) return 0;
    
//     return Math.max(maxDepth(root.left) , maxDepth(root.right) ) +1 

//Iterative
 if(!root){
        return 0
    }
    const queue=[[1,root]]
    let max=0
    while(queue.length>0){
        const [level,node]=queue.shift()
        max=Math.max(max,level)
        if(node.left){
            queue.push([level+1,node.left])
        }

        if(node.right){
            queue.push([level+1,node.right])
        }
    }
    return max
};