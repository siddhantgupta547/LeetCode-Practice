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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const map = new Map()
    const result = []
    function recursive(node) {
        let tree = ''
        let leftSubtree = ''
        let rightSubtree = ''
        if (node.left) {
            leftSubtree += recursive(node.left)
        } else {
            leftSubtree += 'l'
        }

        if (node.right) {
            rightSubtree += recursive(node.right)
        } else {
            rightSubtree += 'r'
        }

        tree = leftSubtree + node.val + rightSubtree
        if (map.has(tree)) {
            const [node, isSet] = map.get(tree)
            if (!isSet) {
                result.push(node)
                map.set(tree, [node, true])
            }
        } else {
            map.set(tree, [node, false])
        }
        return tree
    }
    recursive(root)
    return result
};