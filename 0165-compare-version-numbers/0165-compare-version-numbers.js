/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const version1Split = version1.split('.')
    const version2Split = version2.split('.')
    let idx1 = 0
    let idx2 = 0
    while (idx1 < version1Split.length || idx2 < version2Split.length) {
        let v1 = Number(version1Split[idx1])
        let v2 = Number(version2Split[idx2])
        if (isNaN(v1)) {
            v1 = 0
        }
        if (isNaN(v2)) {
            v2 = 0
        }
        if (v1 > v2) {
            return 1
        } else if (v2 > v1) {
            return -1
        }
        idx1++
        idx2++
    }
    return 0
};