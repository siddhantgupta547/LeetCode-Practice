/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev=head
    let current=head
    let newHead=head
    while(current!==null){
        if(current.val===val){
            current=current.next
            prev.next=current
            if(newHead.val===val){
                newHead=current
            }
        }else{
            prev=current
            current=current.next
        }
    }
    return newHead
};