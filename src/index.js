
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined || matrix == []) return []
  else {
  let sorted = [];
  console.log(matrix)
  let sort_arr
  for (let i = 0; i < matrix.length; i++) {
      let count = i + 1;
      if (count % 2 == 0) {
          sort_arr = matrix[i].reverse()
          sorted.push(...sort_arr)
      }
      else sorted.push(...matrix[i])
  }

  return sorted
}
}
