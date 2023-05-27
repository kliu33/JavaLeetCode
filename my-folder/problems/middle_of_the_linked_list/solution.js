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
var middleNode = function(head) {
    if (head.next === null) return head
    if (head.next.next === null) return head.next
    let len = 0;
    let hash_map = {}
    while(head.next != null){
        hash_map[len] = head
        len += 1
        head = head.next
    }
    return hash_map[Math.ceil(len/2)]
};