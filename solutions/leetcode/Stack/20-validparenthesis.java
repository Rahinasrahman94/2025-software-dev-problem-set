class Solution {
    public boolean isValid(String s) {
        char[] sor = s.toCharArray();
        Stack<Character> stc = new Stack<>();
        if(sor.length == 1)
        {
            return false;
        }
        for(char t :sor)
        {
            if(t == '(')
            {
                stc.push(')');
            }
            else if(t == '[')
            {
                stc.push(']');
            }
            else if(t == '{')
            {
                stc.push('}');
            }
            else
            {
                if( stc.isEmpty() || t != stc.pop() )
                {
                    return false;
                }
            }
        }
        return stc.size() == 0;
    }
}