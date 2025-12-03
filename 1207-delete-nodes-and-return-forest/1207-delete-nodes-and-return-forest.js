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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    if (!root) {
        return []
    }
    const result = []
    const toDelete = new Set(to_delete)
    function recursive(node, isDeleted) {
        if (node.left) {
            let toBeDeleted = false
            const left = node.left
            if (toDelete.has(left.val)) {
                node.left = null
                toDelete.delete(left)
                toBeDeleted = true
            }
            if (isDeleted && !toBeDeleted) {
                result.push(node.left)
            }
            recursive(left, toBeDeleted)
        }

        if (node.right) {
            const right = node.right
            let toBeDeleted = false
            if (toDelete.has(right.val)) {
                node.right = null
                toDelete.delete(right)
                toBeDeleted = true
            }
            if (isDeleted && !toBeDeleted) {
                result.push(node.right)
            }
            recursive(right, toBeDeleted)
        }
    }
    let toBeDeleted=false
    if(toDelete.has(root.val)){
        toBeDeleted=true
    }else{
        result.push(root)
    }
    recursive(root,toBeDeleted)
    return result
};