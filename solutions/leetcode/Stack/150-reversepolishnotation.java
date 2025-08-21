class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stc = new Stack<>();
        for(String token :tokens)
        {
            switch(token)
            {
                case "+":
                    stc.push(stc.pop() + stc.pop());
                    break;
                case "-":
                    int m1 = stc.pop();
                    int m2 = stc.pop();
                    stc.push(m2-m1);
                    break;
                case "*" :
                    stc.push(stc.pop() * stc.pop());
                    break;
                case "/":
                    int divisor = stc.pop();
                    int divident = stc.pop();
                    stc.push(divident/divisor);
                    break;
                default :
                    stc.push(Integer.parseInt(token));
                    break;

            }
        }
        return stc.pop();
    }
}