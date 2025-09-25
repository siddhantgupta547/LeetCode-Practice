/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0";
    let result = "";

    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    let integerPart = Math.floor(num / den);
    result += integerPart;

    let remainder = num % den;
    if (remainder === 0) return result;

    result += ".";

    let map = new Map();
    let decimalPart = "";

    while (remainder !== 0) {
        if (map.has(remainder)) {
            let index = map.get(remainder);
            decimalPart = decimalPart.slice(0, index) + "(" + decimalPart.slice(index) + ")";
            break;
        }

        map.set(remainder, decimalPart.length);
        remainder *= 10;
        let digit = Math.floor(remainder / den);
        decimalPart += digit;
        remainder %= den;
    }

    return result + decimalPart;
};