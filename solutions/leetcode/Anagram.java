class Solution {
    public boolean isAnagram(String s, String t) {
        char[] scharArray = s.toCharArray();
        char[] tcharArray = t.toCharArray();
        Arrays.sort(scharArray );
        Arrays.sort(tcharArray);

        return Arrays.equals(scharArray,tcharArray);
    }
}
/*
* class Solution {
    public boolean isAnagram(String s, String t) {
        int m =0,n=0;
        if(s.length() != t.length())
        {
            return false;
        }
        char[] scharArray = s.toCharArray();
        char[] tcharArray = t.toCharArray();
        for(int i=0;i<s.length();i++){
      m += (int) scharArray[i];
      n += (int) tcharArray[i];

        }
         System.out.println(m);
         System.out.println(n);
        if( m == n)
        {
          return true;
        }
        return false;

    }
}
* */