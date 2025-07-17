// class Solution {
//     public boolean isAnagram(String s, String t) {
//         char[] scharArray = s.toCharArray();
//         char[] tcharArray = t.toCharArray();
//         Arrays.sort(scharArray );
//         Arrays.sort(tcharArray);

//         return Arrays.equals(scharArray,tcharArray);
//     }
// }
let s = "hello";
let t ="ehllo";
let sortedS = s.split('').sort().join('');
let sortedT = t.split('').sort().join('');
if(sortedS === sortedT)
{
    console.log("true");

}
else{
  console.log("false");
}
console.log(sortedS)
console.log(sortedT)
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