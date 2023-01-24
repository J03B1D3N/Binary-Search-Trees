import isBalanced from "./isBalanced.js"
import mergeSort from "./mergeSort.js"
import breathFirst from "./breathFirst.js"
import sortedArrayToBST from "./sortedArrayToBST.js"

function rebalance(node) {
    if(isBalanced(node)){
        return console.log('Tree is already balanced, mission aborted')
    } else {
        let array = mergeSort([... new Set(breathFirst(node))])
        let length  = array.length
        let n = sortedArrayToBST(array, 0, length -1)
        return n
    }
        return n
    }

export default rebalance