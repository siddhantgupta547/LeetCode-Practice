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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, value) {
    if(!root){
        return root=new TreeNode(value)
    }
    let current=root
        while(current!==null){
            if(value>current.val){
                if(current.right===null){
                    current.right=new TreeNode(value)
                    break
                }else{
                    current=current.right
                }
            }else{
                if(current.left===null){
                    current.left=new TreeNode(value)
                    break
                }else{
                    current=current.left
                }
            }
        }
    return root
};