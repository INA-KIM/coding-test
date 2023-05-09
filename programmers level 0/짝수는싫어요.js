function solution(n) {
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      newArr.push(i);
    }
  }
  return newArr;
}
