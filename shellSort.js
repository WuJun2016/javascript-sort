import { isSortSuccess, getArray, logAverageUseTime } from './check.js'
const arr = getArray(100001)

function shellSort (arr) {
  let len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {

    for (let i = gap; i < len; i++) {

        for (let j = i - gap; j >= 0 && arr[j] > arr[gap + j]; j -= gap) {
            let temp = arr[j];
            arr[j] = arr[gap + j];
            arr[gap + j] = temp;
        }

    }

  }
  return arr
}


logAverageUseTime(shellSort, arr, 10)
