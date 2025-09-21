/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let temp = head
    const stack = []
    let top = -1
    const result = []
    let index = 0
    while (temp !== null) {
        if (top !== -1 && stack[top][0] < temp.val) {
            while (top !== -1 && stack[top][0] < temp.val) {
                const idx = stack.pop()[1]
                result[idx] = temp.val
                top--
            }

        }
        stack.push([temp.val, index++])
        top++
        temp = temp.next
    }
    while (top !== -1) {
        const idx = stack[top][1]
        result[idx] = 0
        top--
    }
    return result
};