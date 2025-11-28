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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root){
        return -1
    }
    //const result=[]
    let elem=Number.MAX_SAFE_INTEGER
    function inOrder(node,k){
        if(node.left){
            k=inOrder(node.left,k)
        }
        k--
        if(k===0)
            elem=node.val
        if(node.right){
            k=inOrder(node.right,k)
        }
        return k
    }
    inOrder(root,k)
    return elem
};