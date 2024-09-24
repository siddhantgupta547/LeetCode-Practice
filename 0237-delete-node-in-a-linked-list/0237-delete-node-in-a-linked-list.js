/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let head=node
    let prev=null
    while(head.next!==null){
        head.val=head.next.val
        prev=head
        head=head.next
    }
    prev.next=null
};