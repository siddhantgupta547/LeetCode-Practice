/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack=new Array(maxSize)
    this.top=-1
    this.maxSize=maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.top===this.maxSize-1){
        return 
    }else{
        this.top+=1
        this.stack[this.top]=x
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.top!==-1){
        const value= this.stack[this.top]
        this.stack[this.top]=null
        this.top--
        return value
    }else{
        return -1
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let i=0
    while(i<k && i<this.stack.length){
        if(this.stack[i]&&this.stack[i]!==null){
            this.stack[i]+=val
        }
        i++;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */