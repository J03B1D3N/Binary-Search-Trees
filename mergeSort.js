//the eval(sort) function of the merge sort algorithm that takes two arrays and evaluates them against each other


const arr = [30, 20, 40, 0, 10, 80, 11]
const merge = (leftArr, rightArr) => {
const output = [];
let leftIndex = 0
let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]
        if(leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl)
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}


//the "merge" part of the merge sort algorithm that merges the sorted arrays into one.
function mergeSort(array) {
    if(array.length <= 1)
    return array
    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)
    return merge(
        mergeSort(leftArr), mergeSort(rightArr)
    )
}
export default mergeSort