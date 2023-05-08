/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list2) return list1
    if (!list1) return list2
    let current = list1
    while (current.next !== null) {
        current = current.next
    }
    current.next = list2

    while(current.next !== null) {
        if (current.val > current.next.val) {
            [current.val, current.next.val] = [current.next.val, current.val]
            current = list1
        } else {
            current = current.next
        }
    }
    return list1
};