/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return isSymmetric(root, root);
    }
private:
      bool isSymmetric(TreeNode* p,TreeNode* q) {
        if (p==nullptr && q==nullptr)
            return true;
        else if (!p || !q)
            return false;
        else
            return q->val==p->val &&isSymmetric(p->left,q->right)&&isSymmetric(q->left,p->right);
    }  
};
