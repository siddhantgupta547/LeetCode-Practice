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
var maxLevelSum = function(root) {
    if(!root){
        return -1
    }
    const queue=[[root,1]]
    const levelSum=[]
    while(queue.length){
        let [current,level]=queue.shift()
        if(levelSum?.[level-1]){
            levelSum[level-1]+=current.val
        }else{
            levelSum[level-1]=current.val
        }
        level+=1
        if(current.left){
           queue.push([current.left,level])
        } 
        if(current.right){
            queue.push([current.right,level])
        }
    }
    let maxValue=Number.MIN_SAFE_INTEGER
    let level=0
    for(let i=0;i<levelSum.length;i++){
        if(levelSum[i]>maxValue){
            level=i+1
            maxValue=levelSum[i]
        }
    }
    return level
};