class Solution {
    public boolean isAnagram(String s, String t) {
            //第一种方法是sort，把两个字符串转化位char[]数组，然后比较
            //第二种是hashmap的方法其中用etOrDefault(ch, 0)来记录频次，当频次<0时说明中个字符从来没出现过
            // char[] ss = s.toCharArray();
            // char[] tt = t.toCharArray();
            // Arrays.sort(tt);
            // Arrays.sort(ss);
            // return  Arrays.equals(ss,tt);
            if (s.length() != t.length()){
                return false;
            }
            Map<Character,Integer> table = new HashMap<Character,Integer>();
            for (int i = 0;i<s.length();i++){
                char ch = s.charAt(i);
                table.put(ch,table.getOrDefault(ch,0)+1);
            }
            for (int i = 0;i<s.length();i++){
                char ch = t.charAt(i);
                table.put(ch,table.getOrDefault(ch,0)-1);
                if (table.get(ch)<0) {
                    return false;
                }
            }
            return true;

    }
}