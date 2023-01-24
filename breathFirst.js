function breathFirst(node){
    let currentNode = node
    let queue = []
    let results = []
    queue.push(currentNode)

    while(queue.length){
        currentNode = queue.shift()
        results.push(currentNode.data)
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
    return results
}
export default breathFirst