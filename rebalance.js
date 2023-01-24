function rebalance(node) {
    if(isBalanced(node)){
        return console.log('Tree is already balanced, mission aborted')
    } else {
        let array = mergeSort(levelOrder(node))
        let length  = array.length
        root = sortedArrayToBST(array, 0, length -1)
    }
    }

export default rebalance