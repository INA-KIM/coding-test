function solution(arr) {
  const average = arr.reduce((acc, cur, index, arr) => {
    return index === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
  }, 0);
  return average;
}

//축약형
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
