/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let toBeUpdated=init
    const increment=()=>++toBeUpdated
    const decrement=()=>--toBeUpdated
    const reset=()=>{
        toBeUpdated=init
        return toBeUpdated
    }
    return{
        increment,
        decrement,
        reset,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */