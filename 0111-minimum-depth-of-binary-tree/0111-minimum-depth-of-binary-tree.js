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
var minDepth = function (root) {
    if (!root) {
        return 0
    }
    const queue=[]
    queue.push([root,0])
    let result=Number.MAX_SAFE_INTEGER
    while(queue.length>0){
        const [node,level]=queue.shift()
        if(node.left){
            queue.push([node.left,level+1])
        }
        if(node.right){
            queue.push([node.right,level+1])
        }

        if(!node.left && !node.right){
            const curr=level+1
            if(curr<result){
                result=curr
            }
        }
    }
    return result
};