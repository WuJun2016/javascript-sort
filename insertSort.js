import { isSortSuccess, getArray, logAverageUseTime } from './check.js'
const arr = getArray(30000)

function insertSort (arr) {
  let len = arr.length;
  let preIndex, current
  let num=0
  for(var i=1; i<len; i++) {

    preIndex = i-1
    current = arr[i]
    while(preIndex >=0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] =current
  }
  return arr
}

logAverageUseTime(insertSort, arr, 1)
