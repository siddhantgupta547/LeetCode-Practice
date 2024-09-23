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
var doubleIt = function(head) {
    let current=head
    let value=''
    while(current){
        value+=current.val
        current=current.next
    }
    let doubleStringValue=String(BigInt(value)*BigInt(2))
    let newHead=new ListNode(Number(doubleStringValue[0]),null)
    current=newHead
    let index=0
    for(let i=1;i<doubleStringValue.length;i++){
        current.next=new ListNode(Number(doubleStringValue[i]),null)
        current=current.next
    }
    return newHead
};