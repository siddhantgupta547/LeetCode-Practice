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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let current=root
    const queue=[root]
    let level=0
    let levelMap={}
    while(true){
        let len=queue.length
        if(len===0){
            break
        }
        const levelArray=[]
        while(len>0){
            current=queue.shift()
            levelArray.push(current.val)
            if(current.left){
                queue.push(current.left)
                queue.push(current.right)
            }
            len--
        }
        levelMap[level]=levelArray
        level++
    }
    level=0
    queue.push(root)
    while(true){
        let len=queue.length
        if(len===0){
            break
        }
        const levelArray=levelMap[level]
        j=levelArray.length-1
        while(len>0){
            current=queue.shift()
            if(level%2!==0){
                current.val=levelArray[j--]
            }
            if(current.left){
                queue.push(current.left)
                queue.push(current.right)
            }
            len--
        }
        level++
    }
    return root
};