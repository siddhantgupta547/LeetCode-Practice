/**
 * @param {string} s
 * @return {number}
 */
function isGood(substring) {
    const set = new Set();

    for (let char of substring) {
        if (set.has(char)) {
            return false; 
        }
        set.add(char);
    }

    return true;
}


var countGoodSubstrings = function(s) {
   if (s.length < 3) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        const substring = s.substring(i, i + 3);
        if (isGood(substring)) {
            count++;
        }
    }

    return count;
};