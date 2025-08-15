class MinStack {
    private Stack<Integer> stc;
    private  Stack<Integer> minstc;
    public MinStack() {
        stc = new Stack<>();
        minstc = new Stack<>();

    }

    public void push(int val) {
        stc.push(val);
        if(minstc.isEmpty() ||  val <= minstc.peek())
        {
            minstc.push(val);
        }

    }

    public void pop() {
        int removed = stc.pop();
        if(removed == minstc.peek())
        {
            minstc.pop();
        }
    }

    public int top() {
        return  stc.peek();

    }

    public int getMin() {
        return  minstc.peek();

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */