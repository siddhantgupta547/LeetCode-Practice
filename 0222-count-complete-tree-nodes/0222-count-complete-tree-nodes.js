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
var countNodes = function(root) {
    if(root===null){
        return 0
    }
    let count=1
    if(root.left){
        count+=countNodes(root.left)
    }
    if(root.right){
        count+=countNodes(root.right)
    }
    return count
};