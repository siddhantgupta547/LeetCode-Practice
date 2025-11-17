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
var goodNodes = function(root) {
    let queue=[[root.val,root]]
    let result=1
    while(queue.length>0){
        const [max,node]=queue.shift()
        let maxLeft=max
        let maxRight=max
        if(node.left){
            const leftValue=node.left.val
            if(leftValue>=max){
                maxLeft=leftValue
                result+=1
            }
            queue.push([maxLeft,node.left])
        }

        if(node.right){
            const rightValue=node.right.val
            if(rightValue>=max){
                maxRight=rightValue
                result+=1
            }
            queue.push([maxRight,node.right])
        }

    }
    return result
};