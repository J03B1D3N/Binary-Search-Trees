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


var n = sortedArray.length;
root = sortedArrayToBST(sortedArray, 0, n - 1);

prettyPrint(root)
insert(root, 880)
prettyPrint(root)

 





