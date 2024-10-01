/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const map= new Map();

    for(let items of arr){
        let remainder=items%k;

        if(remainder<0) remainder += k;

        if(map.has(remainder)){
            map.set(remainder, map.get(remainder)+1);
        }else{
            map.set(remainder, 1);
        }
    }

    for(let items of arr){
        let rem=items%k;
        let freq=map.get(rem);

        if(rem==0){
            if(freq%2 !=0){
                return false;
            }
        }else if(2*rem==k){
            if(freq%2 !=0){
                return false;
            }
        }else{
            let freq1=map.get(k-rem);
            if(freq!=freq1){
                return false;
            }
        }

    }

    return true;
};