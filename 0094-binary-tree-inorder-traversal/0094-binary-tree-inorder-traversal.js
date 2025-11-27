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
var inorderTraversal = function (root) {
    /* Inorder means
        pehle left
        phir root
        phir right
    */

    if (!root) {
        return []
    }

    const result=[]

    function recursiveSearch(node) {
        if (node.left) {
            recursiveSearch(node.left)
        }
        result.push(node.val)
        if (node.right) {
            recursiveSearch(node.right)
        }
    }
    recursiveSearch(root)
    return result
};