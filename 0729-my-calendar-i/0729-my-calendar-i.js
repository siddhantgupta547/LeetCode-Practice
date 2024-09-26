
var MyCalendar = function() {
    this.calendar=new Array()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let i=0;i<this.calendar.length;i++){
        if(start<this.calendar[i][1] && end>this.calendar[i][0]){
            return false
        }
    }
    this.calendar.push([start,end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */