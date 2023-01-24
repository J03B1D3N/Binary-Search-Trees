import mergeSort from "./mergeSort.js"
import Node from "./nodeClass.js";
import { inOrder, postOrder, preOrder } from "./orderTraversal.js";
import insertValue from "./insert.js";
import findValue from "./findValue.js";
import { findHeight, findDepth } from "./findDepth/Height.js";
import deleteValue from "./delete.js";
import prettyPrint from "./prettyPrint.js";
import rebalance from "./rebalance.js";
import sortedArrayToBST from "./sortedArrayToBST.js";
import isBalanced from "./isBalanced.js"
import breathFirst from "./breathFirst.js"

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

 
let root = null


const sortedArr = mergeSort([...new Set(arr) ])
let n = sortedArr.length    

console.log(sortedArr)

root = sortedArrayToBST(sortedArr, 0, n-1)

prettyPrint(root)

console.log(isBalanced(root))

console.log(breathFirst(root))
console.log(preOrder(root))
console.log(inOrder(root))
console.log(postOrder(root))
insertValue(root, 1500)
insertValue(root, 16600)
insertValue(root, 505050)
prettyPrint(root)

console.log(isBalanced(root))

root = rebalance(root)

prettyPrint(root)

console.log(isBalanced(root))

console.log(breathFirst(root))
console.log(preOrder(root))
console.log(inOrder(root))
console.log(postOrder(root))







 

























 





