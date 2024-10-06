/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
const arr1=sentence1.split(" ")  
const arr2=sentence2.split(" ")
let i1=0,j1=0
while(i1<arr1.length && j1<arr2.length && arr1[i1]==arr2[j1]){
 i1++;j1++;   
}  
const pre=arr1.slice(0,i1)
let i2=arr1.length-1,j2=arr2.length-1
while(arr1[i2]==arr2[j2] && i2>=i1 && j2>=j1){
 i2--;j2--;
}
const suf=arr1.slice(i2+1)
const res=[...pre,...suf].join(" ")
return res==sentence1 || res==sentence2
};