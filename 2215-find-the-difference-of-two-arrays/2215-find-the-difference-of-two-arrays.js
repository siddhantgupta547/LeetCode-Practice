/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let ans = [];

    ans.push(uniqueElements(nums1, nums2));
    ans.push(uniqueElements(nums2, nums1));

    return ans;
};

var uniqueElements = function(arr1, arr2) {
    let res = [];
    for (let n of arr1) {
        if (!arr2.includes(n) && !res.includes(n)) res.push(n);
    }

    return res;
}