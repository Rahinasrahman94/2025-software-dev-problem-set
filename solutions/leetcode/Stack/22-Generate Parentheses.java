class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backTrack(result,"",0,0,n);
        return result;
    }
    public void backTrack(List<String> result,String current,int open,int close,int m)
    {
        if(current.length() ==  m*2)
        {
            result.add(current);
            return ;
        }
        if(open < m)
        {
            backTrack(result,current + "(",open + 1,close,m);
        }
        if(close < open)
        {
            backTrack(result,current + ")",open,close + 1,m);
        }
    }

}
