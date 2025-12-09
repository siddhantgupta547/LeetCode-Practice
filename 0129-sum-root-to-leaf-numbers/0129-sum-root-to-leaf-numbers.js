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
var sumNumbers = function (root) {
    let totalSum = 0
    function recursive(node, sum) {
        sum = (sum * 10) + node.val

        if (!node.left && !node.right) {
            totalSum += sum
            return
        }

        if (node.left) {
            recursive(node.left, sum)
        }

        if (node.right) {
            recursive(node.right, sum)
        }
    }
    recursive(root, 0)
    return totalSum
};