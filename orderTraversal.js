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

export {preOrder, postOrder, inOrder}