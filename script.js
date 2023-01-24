import mergeSort from "./mergeSort.js"

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortedArray = [1,2,3,4,5,6,7,8,9,10,50,500,900,930,950,1000]


class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
 
var root = null;
 

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

function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    console.log(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}
function inOrder(node) {
    if (node == null)
    {
        return;
    }
    preOrder(node.left);
    console.log(node.data + " ");
    preOrder(node.right);
}

function postOrder(node) {
    if (node == null)
    {
        return;
    }
    preOrder(node.left);
    preOrder(node.right);
    console.log(node.data + " ");
}




const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
 

function insert(node, value) {
    if (node == null){
        node = new Node(value)
        return node
    }
    
    if(node.data > value){
        node.left = insert(node.left, value);
    }
    
    if(node.data < value){
        node.right = insert(node.right, value);
    }
    return node
}

function find(node, value) {
    if (node == null || node.data == value){
        return node
    }

    if(node.data < value){
        return find(node.right, value);
    }
    
    if(node.data > value){
        return find(node.left, value);
    }
    
}

function deleteRec(node,data)
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

function levelOrder(){
    let currentNode = root
    let queue = []
    let results = []
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        results.push(currentNode.value)
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
    return results
}

function findHeight(node, value) {
    if (node == null)
    {
        return -1
    }

    let leftHeight = findHeight(node.left);
    let rightHeight = findHeight(node.right);
    let answer = Math.max(leftHeight, rightHeight) +1;

    if(node.data == value){
        return answer
    }
    return answer
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

function isBalanced(node){
     
    // Base condition
    if(node == null)
        return true
 
    // for left and right subtree height
    let lh = height(node.left)
    let rh = height(node.right)
 
    // allowed values for (lh - rh) are 1, -1, 0
    if (Math.abs(lh - rh) <= 1 && isBalanced(
    node.left)== true && isBalanced( node.right) == true)
        return true
 
    // if we reach here means tree is not
    // height-balanced tree
    return false
}



var n = sortedArray.length;
root = sortedArrayToBST(sortedArray, 0, n - 1);

prettyPrint(root)
deleteRec(root, 500)
prettyPrint(root)
console.log(root)
console.log(findHeight(root))
insert(root, 1100)
console.log(findHeight(root))




 





