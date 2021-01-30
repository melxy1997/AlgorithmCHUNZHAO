/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// class Solution {
//     public List<Integer> inorderTraversal(TreeNode root) {
// //第一种方式可以用递归的方式，中序遍历，初始化一个list作为返回值按做左中右的顺序进行遍历
// //跳出递归的方式是节点为空，return;这里当返回值的类型为void的时候可以用这种办法跳出循环
//         List<Integer> ans = new ArrayList<Integer>();
//         inoeder(ans,root);//传进去的是树
//         return ans;
//     }
//     public void inoeder (List<Integer> list,TreeNode root) {
//         if (root == null){
//             return;//看起来return了但是实际上什么都没有return
//         }
//         inoeder(list,root.left);
//         list.add(root.val);//这里才是添加,添加的不是root，而是val
//         inoeder(list,root.right);
//     }
// }
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        //LinkedList类实现了Queue接口，因此我们可以把LinkedList当成Queue来用
       //原则上讲还是左中右的顺序，但是左节点再压入栈的时候有说法.压栈不等于加入list
       List<Integer> ans = new ArrayList<Integer>();
       Deque<TreeNode> stk = new LinkedList<>();
       //压入栈
       while (root!= null||!stk.isEmpty()){//栈为空遍历结束
           while(root != null) {
               stk.push(root);
               root = root.left;
           }
            root = stk.pop();
            ans.add(root.val);
            root = root.right;
       }
      return ans;
       
    }
}