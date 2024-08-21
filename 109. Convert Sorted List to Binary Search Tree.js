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
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

    if (head==null){
        return null;
    }
    let mid = findMiddle(head);
    let root = new TreeNode(mid.val);
    if (head == mid){//one node in the array
        return root;
    } 
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(mid.next);
    return root;
};
/**
 * @param {ListNode} start
 * @return {TreeNode} 
 */
var findMiddle = function (start) {
    let step1 = start;
    let step2 = start;
    let prev = null;

    while (step2 && step2.next) {
        prev = step1;
        step1 = step1.next;
        step2 = step2.next.next;
    }
    if (prev) {
        prev.next = null;
    }

    return step1;
};
