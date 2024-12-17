/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */

//  function recursiveCheck(sortedS,repeatLimit,result,count){
//     let elemArray=[]
//     let i=0;
//     while(i<sortedS.length){
//         let len=result.length-1
//         let e=false
//         if(elemArray?.[0]&&elemArray?.[0]===result[len] && count<=repeatLimit){
//             count++
//             e=true
//         }else if(elemArray?.[0]&&elemArray?.[0]!==result[len]){
//             e=true;
//         }else if(sortedS?.[i]===result?.[len]){
//             count++
//         }else{
//             count=1
//         }
//         if(count>repeatLimit && !e){
//             elemArray.push(sortedS[i])
//             i++;
//             continue;
//         }
//         if(e){
//             result+=elemArray.shift()
//         }else{
//             result+=sortedS[i]
//             i++
//         }
//     }
//     const newString=elemArray.join('')
//     if(newString===sortedS){
//         return result
//     }
//     return elemArray.length>0?recursiveCheck(newString,repeatLimit,result,count):result
//  }

var repeatLimitedString = function(s, repeatLimit) {
    const freq=new Array(27)
    for(let i=0;i<s.length;i++){
        const index=s.charCodeAt(i)-96
        if(!freq?.[index]){
            freq[index]=1
        }else{
            freq[index]+=1
        }
    }
    let i=26;
    let result=''
    let prev=-1
    let different=false
    while(i>0){
        if(freq[i]>0){
            const character=String.fromCharCode(i+96)
            if(different){
                result+=character
                freq[i]-=1
                different=false
                i=prev
                continue
            }
            if(freq[i]>repeatLimit){
                prev=i
                let toBeAdded=repeatLimit
                for(let k=toBeAdded;k>0;k--){
                    result+=character
                }
                freq[i]-=repeatLimit
                different=true
            }else{
                let toBeAdded=freq[i]
                for(let k=toBeAdded;k>0;k--){
                    result+=character
                }
                freq[i]=0
                different=false
            }
        }
        i--;
    }
    return result
};