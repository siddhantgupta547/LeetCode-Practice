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
var rightSideView = function(root) {
    if(!root){
        return []
    }
    //const queue=[[root,0]]
    // const result=[]
    // while(queue.length>0){
    //     const [node,level]=queue.shift()
    //     result[level]=node.val
    //     if(node.left){
    //         queue.push([node.left,level+1])
    //     }
    //     if(node.right){
    //         queue.push([node.right,level+1])
    //     }
    // }
    // return result
    const result=[]
    function recursiveDFS(node,level){
        if(!(level in result)){
            result[level]=node.val
        }
        if(node.right){
            recursiveDFS(node.right,level+1)
        }
        if(node.left){
            recursiveDFS(node.left,level+1)
        }
    }
    recursiveDFS(root,0)
    return result
};