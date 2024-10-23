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
    const queue=[[root,1]]
    const levelRightMost=[]
    while(queue.length){
        let [current,level]=queue.shift()
        levelRightMost[level-1]=current.val
        level+=1
        if(current.left){
           queue.push([current.left,level])
        } 
        if(current.right){
            queue.push([current.right,level])
        }
    }
    return levelRightMost
};