function solution(array, n) {
  // return array.filter(item => item ===n).length
  return array.reduce((acc, cur) => (cur == n ? (acc += 1) : (acc += 0)), 0);
}
