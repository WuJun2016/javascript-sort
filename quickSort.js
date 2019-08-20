import { isSortSuccess, getArray, logAverageUseTime } from './check.js'
const arr = getArray(100000)


// 平均10ms
function quickSort (array) {
    const copyArray = array.concat()
    baseSort(copyArray, 0, copyArray.length-1)
    return copyArray
}

function baseSort (array, left, right) {
    if (left >= right) {
        return;
    }
    let low = left
    let high = right
    let key = array[low]
    while(low < high) {
        while(low < high && array[high] >= key) {
            high--
        }
        array[low] = array[high]

        while(low < high && array[low] <= key) {
            low++
        }
        array[high] = array[low]
    }
    array[low] = key
    baseSort(array, left, high-1)
    baseSort(array, high+1, right)
}

logAverageUseTime(quickSort, arr, 10)
