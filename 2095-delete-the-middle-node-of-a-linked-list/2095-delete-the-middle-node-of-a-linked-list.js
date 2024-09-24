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
var deleteMiddle = function(head) {
    if(head.next===null){
        return null
    }
    let fastPointer=head
    let slowPointer=head
    let slowPointerPrev=null
    while(fastPointer && fastPointer?.next?.next){
        fastPointer=fastPointer.next.next
        slowPointerPrev=slowPointer
        slowPointer=slowPointer.next
    }
    if(fastPointer.next){
        slowPointerPrev=slowPointer
        slowPointer=slowPointer.next
    }
    slowPointerPrev.next=slowPointer.next
    return head
};