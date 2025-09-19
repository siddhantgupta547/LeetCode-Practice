/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.homepage = new Node(homepage)
    this.length = 1
    this.current = this.homepage
    this.currentIndex=0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    let temp = this.homepage
    let traversed=1
    while (temp !== this.current) {
        temp = temp.next
        traversed++
    }
    const current = new Node(url)
    traversed++
    temp.next = current
    this.length=traversed
    this.current = current
    this.currentIndex=this.length-1
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (steps >= this.length || this.currentIndex+1-steps<=0) {
        this.current=this.homepage
        this.currentIndex=0
        return this.current.value
    }else {
        let temp = this.homepage
        let idx=1
        let toGetTo=this.currentIndex+1-steps
        while (idx!==toGetTo) {
            temp = temp.next
            idx++
        }
        this.currentIndex=idx-1
        this.current=temp
        return temp.value
    }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if(this.currentIndex+1===this.length || this.currentIndex+1+steps>=this.length){
        let temp=this.current
        while(temp.next!==null){
            temp=temp.next
        }
        this.current=temp
        this.currentIndex=this.length-1
        return this.current.value
    }else{
        let temp=this.current
        let moved=0
        while(moved<steps){
            temp=temp.next
            moved++
        }
        this.current=temp;
        this.currentIndex+=moved
        return temp.value
    }
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}