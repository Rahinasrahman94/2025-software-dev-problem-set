var MinStack = function() {
    this.stack = [];
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.min_stack.length === 0 || val <= this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.push(val);
    } else {
        this.min_stack.push(this.min_stack[this.min_stack.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};
