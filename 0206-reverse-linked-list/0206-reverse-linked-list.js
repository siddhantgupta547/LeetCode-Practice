/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current=head
    let prev=null
    let behindPrev=null
    while(current!==null){
        prev=current
        current=current.next
        prev.next=behindPrev
        behindPrev=prev
    }
    return prev
};