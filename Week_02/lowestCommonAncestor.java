/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return lca(root,p,q);
    }
    public TreeNode lca(TreeNode root, TreeNode p, TreeNode q){
        if(root == null || root.val == p.val || root.val == q.val)
            return root;
        TreeNode leftNode = lca(root.left,p,q);
        TreeNode rightNode = lca(root.right,p,q);
        if((leftNode!=null && rightNode!=null)){
            return root;
        }
        return leftNode !=null ? leftNode : rightNode;
    }
}
