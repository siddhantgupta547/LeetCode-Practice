var SmallestInfiniteSet = function() {
    this.smallest = 1;
    this.popped = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    this.popped.add(this.smallest)
    const res = this.smallest
    while (this.popped.has(this.smallest))
        this.smallest ++ ;
    return res;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num<this.smallest){
        this.smallest = num;
        this.popped.delete(num);
    }
    else if ( this.popped.has(num)){
        this.popped.delete(num);
    }
    
};