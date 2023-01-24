import Node from "./nodeClass.js";
function insertValue(node, value) {
    if (node == null){
        node = new Node(value)
        return node
    }
    
    if(node.data > value){
        node.left = insertValue(node.left, value);
    }
    
    if(node.data < value){
        node.right = insertValue(node.right, value);
    }
    return node
}
export default insertValue