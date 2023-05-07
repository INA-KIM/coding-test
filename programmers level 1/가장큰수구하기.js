function solution(array) {
  let newArr = array.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
  return [newArr, array.indexOf(newArr)];
}

//축약형
function solution(array) {
  let num = 0;
  return array.reduce(
    (acc, cur, index) =>
      num < cur ? ((acc[0] = cur), (acc[1] = index), (num = cur), acc) : acc,
    []
  );
}
