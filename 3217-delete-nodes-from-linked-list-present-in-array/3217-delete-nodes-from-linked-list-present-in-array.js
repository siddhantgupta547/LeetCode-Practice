/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    nums = new Set(nums)
    let prev_head = new ListNode(0, head);
    let prev = prev_head;
    while (prev.next) {
        if (nums.has(prev.next.val)) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }

    }
    return prev_head.next

};