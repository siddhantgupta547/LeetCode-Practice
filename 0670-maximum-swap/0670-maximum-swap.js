/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
     const numStr = `${num}`.split("");
  let max = +num;
  for (let i = 0; i < numStr.length - 1; i++) {
    for (let j = i + 1; j < numStr.length; j++) {

      let copy = [...numStr];
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
      max = Math.max(max, +copy.join(""));
    }
  }
  return max
};