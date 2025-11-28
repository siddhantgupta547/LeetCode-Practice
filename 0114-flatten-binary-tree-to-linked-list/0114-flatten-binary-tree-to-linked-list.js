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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root){
        return null
    }
    let result=[]
    function recursive(node){
        result.push(node)
        if(node.left){
            recursive(node.left)
        }
        if(node.right){
            recursive(node.right)
        }
    }
    recursive(root)
    let idx=0
    let idx2=1
    while(idx2<result.length){
        const curr=result[idx++]
        const next=result[idx2++]
        curr.left=null
        curr.right=next
        if(next)
            next.left=null
    }
    return root
};