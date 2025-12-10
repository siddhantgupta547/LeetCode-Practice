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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (depth === 1) {
        const node = new TreeNode(val, root)
        return node
    }

    const queue = [[root, 1]]
    while (queue.length > 0) {
        const [node, level] = queue.shift()
        if (level === depth - 1) {
            const leftNode = new TreeNode(val, node.left)
            const rightNode = new TreeNode(val, null, node.right)
            node.left = leftNode
            node.right = rightNode
            continue
        }
        if (level > depth - 1) {
            break;
        }
        if (node.left) {
            queue.push([node.left, level + 1])
        }

        if (node.right) {
            queue.push([node.right, level + 1])
        }
    }
    return root
};