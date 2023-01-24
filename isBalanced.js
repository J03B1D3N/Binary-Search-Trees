import { findHeight } from "./findDepth/Height.js"


function isBalanced(node){
     
    // Base condition
    if(node == null)
        return true
 
    // for left and right subtree height
    let lh = findHeight(node.left)
    let rh = findHeight(node.right)
 
    // allowed values for (lh - rh) are 1, -1, 0
    if (Math.abs(lh - rh) <= 1 && isBalanced(
    node.left)== true && isBalanced( node.right) == true)
        return true
 
    // if we reach here means tree is not
    // height-balanced tree
    return false
}

export default isBalanced