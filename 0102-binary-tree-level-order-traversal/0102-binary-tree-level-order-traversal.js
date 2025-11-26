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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let queue=[]
    queue.push([root,0])
    let result=[]
    while(queue.length>0){
        const [node,level]=queue.shift()
        if(level in result){
            result[level].push(node?.val)
        }else{
            result[level]=[node?.val]
        }

        if(node.left){
            queue.push([node.left,level+1])
        }
          if(node.right){
            queue.push([node.right,level+1])
        }
    }
    return result
};