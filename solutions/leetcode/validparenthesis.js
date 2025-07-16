var isValid = function(s) {
    let stack = [];
    for (let c of s)
    {
       if(c === '(')
       {
        stack.push(')')
       }
       else if(c === '{')
       {
           stack.push('}')
       } 
       else if(c === '[')
       {
           stack.push(']')
       }
       
       else if( stack.pop() !== c)
       {
        return false
       }
       
       }
       return stack.length === 0;
        
    }