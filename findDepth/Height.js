function findHeight(root){
     
    // base condition when binary tree is empty
    if(root == null)
        return 0
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1
}

function findDepth(node, x)
{
      
    // Base case
    if (node == null)
        return -1;
  
    // Initialize distance as -1
    let dist = -1;
  
    // Check if x is current node=
    if ((node.data == x)|| 
      
        // Otherwise, check if x is
        // present in the left subtree
        (dist = findDepth(node.left, x)) >= 0 || 
          
        // Otherwise, check if x is
        // present in the right subtree
        (dist = findDepth(node.right, x)) >= 0)
  
        // Return depth of the node
        return dist + 1;
          
    return dist;
}
export {findDepth, findHeight}