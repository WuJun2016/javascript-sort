import { isSortSuccess, getArray, logAverageUseTime } from './check.js'
const arr = getArray(100000)

// 性能极差, 但是一种稳定排序
function buddleSort(array) {
  const newArr = array.concat()
  const length = newArr.length;
  for(let i=0; i < length; i++) {
    for (let j=i+1; j < length; j++) {
      if (newArr[i] > newArr[j]) {
        let temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
      }
    }
  }
  return newArr
}


logAverageUseTime(buddleSort, arr, 1)
