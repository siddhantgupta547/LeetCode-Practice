/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // const set= new Set()
    // let current = head
    // while(current){
    //     if(set.has(current)){
    //         return current
    //     }
    //     set.add(current)
    //     current=current.next
    // }
    // return null
    let slowPointer=head
    let fastPointer=head
    let ran=false
    while(fastPointer && fastPointer.next && (fastPointer!==slowPointer || !ran)){
        if(!ran){
            ran=true
        }
        fastPointer=fastPointer.next.next
        slowPointer=slowPointer.next
    }
    if(ran && slowPointer===fastPointer){
        let current=head
        while(current!==slowPointer){
            current=current.next
            slowPointer=slowPointer.next
        }
        return current
    }
    return null
};
//https://www.youtube.com/watch?v=vlrxs-LPni4&list=PLpIkg8OmuX-LH398-_ZcuHiRueOdsJbXU&index=5