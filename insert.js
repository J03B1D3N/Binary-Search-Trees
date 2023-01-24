function insertValue(node, value) {
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
export default insertValue