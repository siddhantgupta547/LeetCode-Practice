/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    let result = false
    // function recursive(head, root, currentHead) {
    //     if (!currentHead || !root) {
    //         if (!root && !currentHead) {
    //             return true
    //         } else if (head && !currentHead) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    //     if (currentHead.val === root.val) {
    //         currentHead = currentHead.next
    //         result = recursive(head, root.left, currentHead) || recursive(head, root.right, currentHead)
    //     } else if (currentHead !== head && head.val === root.val) {
    //         currentHead = head.next
    //         result = recursive(head, root.left, currentHead) || recursive(head, root.right, currentHead)
    //     }
    //     else {
    //         result = recursive(head, root.left, head) || recursive(head, root.right, head)
    //     }
    //     return result
    // }
    // result = recursive(head, root, head)
    // return result
    function check(root,head){
        if(!head || !root){
            if(!head&&!root){
                return true
            }else if(!head){
                return true
            }else{
                return false
            }
        }
        if(root.val===head.val){
            return check(root.left,head.next) || check(root.right,head.next)
        }
    }
    if(!root){
        return false
    }

    if(check(root,head)){
        return true
    }
    return isSubPath(head,root.left)||isSubPath(head,root.right)
};