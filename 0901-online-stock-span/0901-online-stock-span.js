
var StockSpanner = function() {
    this.portfolio=[]
    this.top=-1
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span=1
    if(this.top!==-1){
        if(this.portfolio[this.top][0]>price){
            this.portfolio.push([price,span])
            this.top++
        }else{
            while(this.top!==-1&&this.portfolio[this.top][0]<=price){
                span+=this.portfolio[this.top][1]
                this.portfolio.pop()
                this.top--;
            }
            this.portfolio.push([price,span])
            this.top++
        }
    }else{
        this.portfolio.push([price,span])
        this.top++
    }
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */