import Node from "./nodeClass.js";

function sortedArrayToBST(arr, start, end){

    if (start > end)
    {
        return null;
    }
    
    var mid = parseInt((start + end) / 2);
    var node = new Node(arr[mid]);
 

    node.left = sortedArrayToBST(arr, start, mid - 1);
   
    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;

}

export default sortedArrayToBST