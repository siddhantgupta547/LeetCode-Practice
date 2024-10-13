/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const map=new Map()
    let current=head
    let newhead=null
    let newListCurrent=null
    while(current!==null){
        const newNode=new Node(current.val,null,null)
        if(newhead===null){
            newhead=newNode
            newListCurrent=newhead
        }else{
            newListCurrent.next=newNode
            newListCurrent=newListCurrent.next
        }
        map.set(current,newNode)
        current=current.next
    }
    current=head
    newListCurrent=newhead
    while(current!==null){
        if(current.random!==null){
            newListCurrent.random=map.get(current.random)
        }
        current=current.next
        newListCurrent=newListCurrent.next
    }
    return newhead
};