/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root==null) {
        return true;
    }
    if (Math.abs(height(root.left)-height(root.right))>1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

/**
 * @param {TreeNode} node
 * @return {int}
 */
var height = function(node) {
    if (node==null)
        return 0;
    else 
    return Math.max(height(node.left),height(node.right))+1;
};
