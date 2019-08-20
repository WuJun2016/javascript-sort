// 验证数组的排序是否正确
export function isSortSuccess (array) {
  for (let i=1; i<array.length-1; i++) {
    if (array[i] < array[i-1]) return false
  }
  return true
}


// 生成一个数组
export function getArray (size) {
  const array = []
  for (let i=0; i< size; i++) {
    let random = Math.ceil(Math.random()*size+1)
    array.push(random)
  }
  return array
}


// logAvgUseTime
export function logAverageUseTime(fn, array, num) {
  let begin = new Date();
  for (let i=0; i< num; i++) {
    console.log('排序了')
    const newArr = fn(array)
    console.log(`排序成功:${isSortSuccess(newArr)}`)
  }
  let end = new Date()
  console.log(`${num}次排序平均使用时间${(end-begin)/num}`)
}
