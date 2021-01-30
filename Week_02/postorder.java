class Solution {
    //递归法要确定判定条件，左右根
    List<Integer> list ;
    public List<Integer> postorder(Node root) {
        list = new ArrayList<>() ;
        order(root) ;
        return list ;
    }

    public void order(Node root)
    {
        if(root == null)
        {
            return ;
        }
        for(Node child: root.children)
        {
            order(child) ;
        }
        
        list.add(root.val) ;
    }

}
