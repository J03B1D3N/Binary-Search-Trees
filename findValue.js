function findValue(node, value) {
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
export default findValue