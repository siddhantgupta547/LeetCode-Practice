/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) {
        return root
    }
    let queue = []
    queue.push([root, 0])
    let prev = [null, -1]
    while (queue.length > 0) {
        const [node, level] = queue.shift()
        const [prevNode, prevLevel] = prev

        if (prevNode && level === prevLevel) {
            prevNode.next = node
        } else if (prevNode && level !== prevLevel) {
            prevNode.next = null
        }

        if (node.left) {
            queue.push([node.left, level + 1])
        }
        if (node.right) {
            queue.push([node.right, level + 1])
        }
        prev = [node, level]
    }
    return root
};