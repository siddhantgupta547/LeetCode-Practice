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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {

        return []

    }

    const stack = []
    let result = false

    function recursive(node, sum) {
        if (result) {
            return result
        }

        stack.push(node.val)

        const val = node.val

        sum += val

        if (sum === targetSum && (!node.left && !node.right)) {
            stack.pop()
            result = true
            return

        }

        if (node.left) {

            recursive(node.left, sum)

        }

        if (node.right) {

            recursive(node.right, sum)

        }

        stack.pop(node.val)

    }

    recursive(root, 0)

    return result
};