/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */

// function keepOrSkip(books,index,remainingWidth, height, totalHeight,shelfWidth,memoize){
//     if(index===books.length){
//         return totalHeight+height
//     }
//     if(memoize.has(`${index},${remainingWidth},${totalHeight}`)){
//         return memoize.get(`${index},${remainingWidth},${totalHeight}`)
//     }
//     let keep=Number.MAX_VALUE;
//     let skip=Number.MAX_VALUE;
//     if(remainingWidth-books[index][0]>=0){
//         keep=keepOrSkip(books,index+1,remainingWidth-books[index][0],Math.max(books[index]                 [1],height),totalHeight,shelfWidth,memoize)
//     }
    
//     if(remainingWidth!==shelfWidth||remainingWidth-books[index][0]<0){
//         skip=keepOrSkip(books,index,shelfWidth,0,totalHeight+height,shelfWidth,memoize)
//     }
//     const result=Math.min(keep,skip)
//     memoize.set(`${index},${remainingWidth},${totalHeight}`,result)
//     return result
// }

// var minHeightShelves = function(books, shelfWidth) {
//     const memoize= new Map()
//     return keepOrSkip(books,0,shelfWidth,0,0,shelfWidth,memoize)
// };
var minHeightShelves = function(books, maxWidth) {
    // key => result of key
    const map = new Map()
    function toKey(...args) {
        return args.join('|')
    }
    
    function solve(fromIndex, restWidth, maxHeight) {
        if (fromIndex >= books.length)  return 0
    
        const key = toKey(fromIndex, restWidth, maxHeight)
        if (map.has(key))   return map.get(key)
        
        let result
        const book = books[fromIndex]
        const [width, height] = book
        
        let subresultSameRow = Infinity, subresultNewRow
        if (restWidth === maxWidth) subresultNewRow = Infinity
        
        if (restWidth >= width) {
            let heightDiff = 0
            if (height > maxHeight) {
                heightDiff = height - maxHeight
            }
            subresultSameRow =
                heightDiff + solve(1 + fromIndex, restWidth - width, Math.max(maxHeight, height))
        }
        subresultNewRow = height + solve(1 + fromIndex, maxWidth - width, height)
        
        result = Math.min(subresultSameRow, subresultNewRow)
        map.set(key, result)
        return result
    }
    
    
    let result = solve(0, maxWidth, 0)
    return result
};