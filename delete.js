function deleteValue(node,data)
{
    /* Base Case: If the tree is empty */
        if (node == null)
            return node;
  
        /* Otherwise, recur down the tree */
        if (data < node.data)
            node.left = deleteRec(node.left, data);
        else if (data > node.data)
            node.right = deleteRec(node.right, data);
  
        // if data is same as node's
        // data, then This is the
        // node to be deleted
        else {
            // node with only one child or no child
            if (node.left == null)
                return node.right;
            else if (node.right == null)
                return node.left;
  
            // node with two children: Get the inorder
            // successor (smallest in the right subtree)
            node.data = minValue(node.right);
  
            // Delete the inorder successor
            node.right = deleteRec(node.right, node.data);
        }
  
        return node;
}
 
function minValue(node)
{
    let minv = node.data;
        while (node.left != null)
        {
            minv = node.left.data;
            node = node.left;
        }
        return minv;
}

export default deleteValue